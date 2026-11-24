import sys, math, subprocess, os, numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance, ImageOps

W, H, FPS = 1080, 1920, 30
R = "/home/claude/reel"
MONT = "/usr/share/fonts/truetype/google-fonts/ofl/montserrat/Montserrat[wght].ttf"
POPB = "/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf"

def font(size, var="Black"):
    f = ImageFont.truetype(MONT, size)
    f.set_variation_by_name(var)
    return f

# ---------- layout ----------
SW, SH = 620, 1342              # screen size
BZ = 20                          # bezel
PX = (W - SW) // 2               # screen x
PY = 360                         # screen y
SCALE = SW / 780.0               # source (780 wide) -> screen

# ---------- background ----------
def make_bg():
    y, x = np.mgrid[0:H, 0:W]
    d = np.sqrt(((x - W * .5) / W) ** 2 + ((y - H * .42) / H) ** 2)
    d = np.clip(d / .75, 0, 1)[..., None]
    c1 = np.array([92, 52, 14]); c2 = np.array([14, 8, 3])
    a = (c1 * (1 - d) + c2 * d).astype(np.uint8)
    return Image.fromarray(a)
BG = make_bg()

# phone overlay (RGBA) with transparent screen hole
def make_phone():
    ph = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ds = ImageDraw.Draw(sh)
    ds.rounded_rectangle((PX - BZ + 10, PY - BZ + 30, PX + SW + BZ + 10, PY + SH + BZ + 40), 90, fill=(0, 0, 0, 170))
    sh = sh.filter(ImageFilter.GaussianBlur(28))
    d = ImageDraw.Draw(ph)
    d.rounded_rectangle((PX - BZ - 3, PY - BZ - 3, PX + SW + BZ + 3, PY + SH + BZ + 3), 86, fill=(196, 150, 60, 255))
    d.rounded_rectangle((PX - BZ, PY - BZ, PX + SW + BZ, PY + SH + BZ), 82, fill=(12, 12, 12, 255))
    hole = Image.new("L", (W, H), 0)
    ImageDraw.Draw(hole).rounded_rectangle((PX, PY, PX + SW, PY + SH), 62, fill=255)
    a = np.array(ph); a[..., 3] = np.where(np.array(hole) > 0, 0, a[..., 3]); ph = Image.fromarray(a)
    out = sh.copy(); out.alpha_composite(ph)
    a = np.array(out); a[..., 3] = np.where(np.array(hole) > 0, 0, a[..., 3]); out = Image.fromarray(a)
    return out, hole
PHONE, HOLE = make_phone()

# ---------- sources ----------
_cache = {}
def src(name):
    if name not in _cache:
        p = f"{R}/old/{name[4:]}.jpg" if name.startswith("old/") else f"{R}/app/{name}.png"
        im = Image.open(p).convert("RGB")
        if name.startswith("old/"):
            im = ImageEnhance.Color(im).enhance(.55)
        _cache[name] = im
    return _cache[name]

def ease(u): return 0.5 - 0.5 * math.cos(math.pi * max(0, min(1, u)))
def back(u):
    u = max(0, min(1, u)); c = 1.70158
    return 1 + (c + 1) * (u - 1) ** 3 + c * (u - 1) ** 2

def shot_img(s, t):
    im = src(s["src"]); u = ease((t - s["t0"]) / (s["t1"] - s["t0"]))
    y0, y1 = s.get("y", (0, 0)); z0, z1 = s.get("z", (1, 1))
    z = z0 + (z1 - z0) * u
    vh = 1688 / z; vw = 780 / z
    y = y0 + (y1 - y0) * u
    y = max(0, min(im.height - vh, y))
    cx = s.get("cx", 390)
    x = max(0, min(780 - vw, cx - vw / 2))
    if s.get("zc"):  # zoom around a centre y in viewport
        y = max(0, min(im.height - vh, s["zc"] - vh / 2))
    box = (x, y, x + vw, y + vh)
    return im.resize((SW, SH), Image.BICUBIC, box=box)

# ---------- timeline ----------
SHOTS = [
 dict(t0=0.0, t1=0.9, src="old/h1", z=(1, 1.03)),
 dict(t0=0.9, t1=1.9, src="old/h2", z=(1, 1.03), tap=(1.6, 310, 652)),
 dict(t0=1.9, t1=3.0, src="old/1", z=(1, 1.04), tap=(2.7, 310, 340)),
 dict(t0=3.0, t1=4.0, src="old/3", z=(1, 1.25), zc=820),
 dict(t0=4.0, t1=7.0, src="home", y=(0, 600), slide=True),
 # TENNIS 7-17
 dict(t0=7.0, t1=8.6, src="tennis", y=(0, 240), tap=(8.3, 310, 520)),
 dict(t0=8.6, t1=10.0, src="tcat", y=(0, 0), z=(1, 1.04), tap=(9.7, 310, 260)),
 dict(t0=10.0, t1=11.6, src="ttabl", y=(0, 700)),
 dict(t0=11.6, t1=13.0, src="tvista", y=(0, 0), z=(1, 1.15), zc=700),
 dict(t0=13.0, t1=14.0, src="tennis", y=(700, 900)),
 dict(t0=14.0, t1=15.4, src="tgioc", y=(0, 500)),
 dict(t0=15.4, t1=17.0, src="tprof", y=(0, 200)),
 # PADEL 17-26
 dict(t0=17.0, t1=18.4, src="padel", y=(0, 300), tap=(18.1, 310, 640)),
 dict(t0=18.4, t1=19.8, src="pcat", y=(0, 160)),
 dict(t0=19.8, t1=21.2, src="ptappa", y=(0, 500)),
 dict(t0=21.2, t1=22.6, src="pclass", y=(0, 700)),
 dict(t0=22.6, t1=24.4, src="pprof", y=(0, 900)),
 dict(t0=24.4, t1=26.0, src="pagg", y=(0, 0), z=(1, 1.05)),
 # CALCIO 26-50
 dict(t0=26.0, t1=27.5, src="cat", y=(0, 300)),
 dict(t0=27.5, t1=29.5, src="risultati", y=(380, 1400)),
 dict(t0=29.5, t1=31.0, src="classifica", y=(120, 260)),
 dict(t0=31.0, t1=32.5, src="marcatori", y=(150, 650)),
 dict(t0=32.5, t1=35.0, src="serio", y=(0, 1000)),
 dict(t0=35.0, t1=36.8, src="rosa", y=(950, 1800)),
 dict(t0=36.8, t1=38.4, src="giudice", y=(450, 850)),
 dict(t0=38.4, t1=40.4, src="gazz6", y=(0, 420)),
 dict(t0=40.4, t1=42.4, src="svinc", y=(0, 900)),
 dict(t0=42.4, t1=44.4, src="galc", y=(0, 400), tap=(44.1, 160, 300)),
 dict(t0=44.4, t1=46.2, src="album", z=(1, 1.04), tap=(45.9, 310, 500)),
 dict(t0=46.2, t1=48.0, src="lightbox", z=(1, 1.08), zc=844),
 dict(t0=48.0, t1=50.0, src="media", z=(1, 1.04)),
 # EXTRA 50-55
 dict(t0=50.0, t1=52.5, src="isc", y=(0, 400)),
 dict(t0=52.5, t1=55.0, src="partner", y=(0, 900)),
]
OUT = 55.0
XF = 0.22  # crossfade between shots

CAPS = [
 (0.0, 3.0, "PRIMA ERA COSÌ…", (255, 255, 255)),
 (3.0, 4.0, "TROPPI CLICK!", (255, 90, 80)),
 (4.0, 5.5, "LA WEB CUP CAMBIA", (242, 177, 52)),
 (5.5, 7.0, "NUOVA APP 2.0", (242, 177, 52)),
 (7.0, 8.6, "TUTTO IN POCHI CLICK", None), (8.6, 10.0, "CATEGORIE E TABELLONI", None), (10.0, 11.6, "RISULTATI SET PER SET", None),
 (11.6, 13.0, "TABELLONE COMPLETO", None), (13.0, 14.0, "ORDER OF PLAY", None), (14.0, 15.4, "PROFILO DI OGNI GIOCATORE", None),
 (15.4, 17.0, "TITOLI E SET VINTI", None),
 (17.0, 18.4, "CATEGORIE", None), (18.4, 19.8, "TAPPE E VINCITORI", None), (19.8, 21.2, "TABELLONI GOLD · SILVER", None),
 (21.2, 22.6, "CLASSIFICA MASTER", None), (22.6, 24.4, "PROFILO GIOCATORE", None), (24.4, 26.0, "AGGIORNA I TUOI DATI", None),
 (26.0, 27.5, "3 COMPETIZIONI", None), (27.5, 29.5, "RISULTATI LIVE", None), (29.5, 31.0, "CLASSIFICHE", None), (31.0, 32.5, "MARCATORI", None),
 (32.5, 35.0, "STATISTICHE GIOCATORE", None), (35.0, 36.8, "ROSE CON FOTO", None), (36.8, 38.4, "GIUDICE SPORTIVO", None),
 (38.4, 40.4, "IL GAZZETTINO", None), (40.4, 42.4, "SVINCOLATI", None),
 (42.4, 44.4, "PHOTO GALLERY INTEGRATA", (242, 177, 52)), (44.4, 46.2, "NIENTE PIÙ LINK ESTERNI", (242, 177, 52)), (46.2, 48.0, "LE FOTO DI OGNI PARTITA", None),
 (48.0, 50.0, "INTERVISTE E HIGHLIGHTS", None),
 (50.0, 52.5, "ISCRIZIONI SU WHATSAPP", None), (52.5, 55.0, "DIVENTA SPONSOR PARTNER", None),
]
CHIPS = [(7.0, 17.0, "TENNIS", (200, 69, 43)), (17.0, 26.0, "PADEL", (42, 111, 214)), (26.0, 50.0, "CALCIO", (31, 143, 90)), (50.0, 55.0, "E IN PIÙ", (190, 135, 30))]
SUBS = [
 (0.0, 4.0, "Basta link infiniti e risultati da cercare."),
 (4.0, 7.0, "La WEB CUP cambia: ecco la nuova app 2.0!"),
 (7.0, 13.0, "Nel tennis tutto è a portata di pochi tocchi: categorie, tabelloni e Order of Play."),
 (13.0, 17.0, "Ogni giocatore ha il suo profilo, con titoli e set vinti."),
 (17.0, 22.6, "Anche nel padel: tappe, vincitori, tabelloni e la classifica del Master."),
 (22.6, 26.0, "E ognuno può aggiornare i propri dati in autonomia."),
 (26.0, 32.5, "Nel calcio trovi risultati, classifiche e marcatori in tempo reale,"),
 (32.5, 38.4, "le statistiche di ogni calciatore, le rose con le foto e il Giudice Sportivo."),
 (38.4, 42.4, "Il Gazzettino con le cronache e la sezione Svincolati."),
 (42.4, 48.0, "E da oggi la Photo Gallery è dentro l'app: niente più link esterni!"),
 (48.0, 50.0, "Interviste e highlights a portata di tap."),
 (50.0, 55.0, "E in più: iscrizioni su WhatsApp e spazio per i nostri partner."),
 (55.0, 60.0, "Scarica l'app WEB CUP. Il torneo, sempre con te!"),
]

# ---------- text helpers ----------
_tcache = {}
def text_img(txt, size, col, var="Black", maxw=980, stroke=0):
    k = (txt, size, col, var, maxw, stroke)
    if k in _tcache: return _tcache[k]
    f = font(size, var)
    while f.getlength(txt) > maxw and size > 30:
        size -= 4; f = font(size, var)
    l, t, r, b = f.getbbox(txt, stroke_width=stroke)
    im = Image.new("RGBA", (r - l + 40, b - t + 40), (0, 0, 0, 0))
    sh = Image.new("RGBA", im.size, (0, 0, 0, 0))
    ImageDraw.Draw(sh).text((20 - l, 26 - t), txt, font=f, fill=(0, 0, 0, 200), stroke_width=stroke)
    sh = sh.filter(ImageFilter.GaussianBlur(7))
    ImageDraw.Draw(im).text((20 - l, 20 - t), txt, font=f, fill=col + (255,), stroke_width=stroke, stroke_fill=(20, 10, 3, 255))
    sh.alpha_composite(im); _tcache[k] = sh
    return sh

def paste_center(canvas, im, cx, cy, scale=1.0, alpha=1.0):
    if scale != 1.0:
        im = im.resize((max(1, int(im.width * scale)), max(1, int(im.height * scale))), Image.BICUBIC)
    if alpha < 1:
        a = np.array(im); a[..., 3] = (a[..., 3] * alpha).astype(np.uint8); im = Image.fromarray(a)
    canvas.alpha_composite(im, (int(cx - im.width / 2), int(cy - im.height / 2)))

def wrap(txt, f, maxw):
    words = txt.split(); lines = []; cur = ""
    for w in words:
        t = (cur + " " + w).strip()
        if f.getlength(t) <= maxw: cur = t
        else: lines.append(cur); cur = w
    lines.append(cur); return lines

_scache = {}
def sub_img(txt):
    if txt in _scache: return _scache[txt]
    f = font(40, "Bold"); lines = wrap(txt, f, 960)
    lh = 52; h = lh * len(lines) + 34; w = int(max(f.getlength(l) for l in lines)) + 60
    im = Image.new("RGBA", (w, h), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    d.rounded_rectangle((0, 0, w, h), 26, fill=(0, 0, 0, 165))
    for i, l in enumerate(lines):
        d.text((w / 2, 17 + i * lh + lh / 2), l, font=f, fill=(255, 255, 255, 255), anchor="mm")
    _scache[txt] = im; return im

def chip_img(txt, col):
    k = ("chip", txt)
    if k in _tcache: return _tcache[k]
    f = font(34, "ExtraBold"); w = int(f.getlength(txt)) + 56
    im = Image.new("RGBA", (w, 64), (0, 0, 0, 0))
    ImageDraw.Draw(im).rounded_rectangle((0, 0, w - 1, 63), 32, fill=col + (255,))
    ImageDraw.Draw(im).text((w / 2, 33), txt, font=f, fill=(255, 255, 255, 255), anchor="mm")
    _tcache[k] = im; return im

def _badge(p, h):
    im = Image.open(p).convert("RGBA"); im = im.crop(im.getbbox())
    return im.resize((int(im.width * h / im.height), h), Image.LANCZOS)
BADGES = [_badge(f"{R}/badges/appstore.png", 120), _badge(f"{R}/badges/gplay.png", 120)]
WCUP = Image.open("/home/claude/webcup2/wlogo/wcup.png").convert("RGBA")
LOGO = WCUP.copy(); LOGO.thumbnail((560, 560))
def _shadow(im, blur=16, op=1.0, pad=70):
    a = im.split()[3].point(lambda v: int(v * op))
    sh = Image.new("RGBA", (im.width + 2 * pad, im.height + 2 * pad), (0, 0, 0, 0))
    blk = Image.new("RGBA", im.size, (0, 0, 0, 255)); blk.putalpha(a); sh.paste(blk, (pad, pad), blk)
    return sh.filter(ImageFilter.GaussianBlur(blur))
LOGO_SH = _shadow(LOGO)

# ---------- frame ----------
def screen_at(t):
    cur = [s for s in SHOTS if s["t0"] <= t < s["t1"]]
    if not cur: return None, None
    s = cur[0]; i = SHOTS.index(s)
    img = shot_img(s, t)
    # crossfade from previous shot at shot start
    if i > 0 and SHOTS[i - 1]["t1"] == s["t0"] and t - s["t0"] < XF and not s.get("slide"):
        p = SHOTS[i - 1]; pimg = shot_img(p, p["t1"] - 0.001)
        img = Image.blend(pimg, img, (t - s["t0"]) / XF)
    if s.get("slide") and t - s["t0"] < 0.5:
        u = ease((t - s["t0"]) / 0.5); p = SHOTS[i - 1]; pimg = shot_img(p, p["t1"] - 0.001)
        c = Image.new("RGB", (SW, SH)); off = int(SW * u)
        c.paste(pimg, (-off, 0)); c.paste(img, (SW - off, 0)); img = c
    return img, s

def frame(t):
    fr = BG.copy().convert("RGBA")
    if t < OUT:
        scr, s = screen_at(t)
        if scr is not None:
            layer = Image.new("RGBA", (W, H), (0, 0, 0, 0)); layer.paste(scr, (PX, PY))
            a = np.array(layer); a[..., 3] = np.array(HOLE); fr.alpha_composite(Image.fromarray(a))
            # tap ripple
            if s.get("tap"):
                tt, x, y = s["tap"]
                if 0 <= t - tt < 0.4:
                    u = (t - tt) / 0.4; r = 18 + 40 * u; al = int(220 * (1 - u))
                    ov = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
                    d.ellipse((PX + x - r, PY + y - r, PX + x + r, PY + y + r), fill=(255, 255, 255, al // 2), outline=(255, 255, 255, al), width=5)
                    fr.alpha_composite(ov)
        fr.alpha_composite(PHONE)
        # red X on "prima"
        if 3.25 <= t < 4.0:
            u = back((t - 3.25) / 0.25); ov = Image.new("RGBA", (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(ov)
            c = (W // 2, PY + SH // 2); r = int(230 * u)
            d.line((c[0] - r, c[1] - r, c[0] + r, c[1] + r), fill=(230, 40, 40, 230), width=46)
            d.line((c[0] - r, c[1] + r, c[0] + r, c[1] - r), fill=(230, 40, 40, 230), width=46)
            fr.alpha_composite(ov)
        # chip
        for t0, t1, txt, col in CHIPS:
            if t0 <= t < t1:
                u = back((t - t0) / 0.25); ci = chip_img(txt, col)
                paste_center(fr, ci, W / 2, 120, scale=max(.01, u))
        # caption
        for t0, t1, txt, col in CAPS:
            if t0 <= t < t1:
                u = back((t - t0) / 0.22)
                ti = text_img(txt, 84, col or (255, 255, 255), stroke=0)
                cy = 250 if any(a <= t < b for a, b, _, _ in CHIPS) else 220
                paste_center(fr, ti, W / 2, cy, scale=max(.01, 0.6 + 0.4 * u), alpha=min(1, (t - t0) / 0.12))
    else:
        # outro
        u = back((t - OUT) / 0.45)
        paste_center(fr, LOGO_SH, W / 2 + 18, 668, scale=max(.01, u))
        paste_center(fr, LOGO, W / 2, 640, scale=max(.01, u))
        u2 = min(1, max(0, (t - OUT - 0.35) / 0.3))
        paste_center(fr, text_img("SCARICA L'APP", 90, (255, 255, 255)), W / 2, 1060, alpha=u2)
        paste_center(fr, text_img("WEB CUP", 130, (242, 177, 52)), W / 2, 1180, alpha=u2)
        u3 = min(1, max(0, (t - OUT - 0.8) / 0.3))
        paste_center(fr, text_img("Il torneo, sempre con te!", 54, (255, 255, 255), var="SemiBold"), W / 2, 1320, alpha=u3)
        # official store badges
        if u3 > 0:
            for i, bd in enumerate(BADGES):
                paste_center(fr, bd, W / 2 + (-235 if i == 0 else 235), 1480, alpha=u3)
    # subtitles
    for t0, t1, txt in SUBS:
        if t0 <= t < t1:
            al = min(1, (t - t0) / 0.15, (t1 - t) / 0.15)
            paste_center(fr, sub_img(txt), W / 2, 1810, alpha=max(0, al))
    return fr.convert("RGB")

def render(a, b, out):
    tmp = out[:-4] + ".tmp.mp4"
    p = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                          "-c:v", "libx264", "-preset", "veryfast", "-crf", "18", "-pix_fmt", "yuv420p", tmp], stdin=subprocess.PIPE)
    n0 = round(a * FPS); n1 = round(b * FPS)
    for n in range(n0, n1):
        p.stdin.write(frame(n / FPS).tobytes())
    p.stdin.close(); p.wait()
    if p.returncode == 0: os.replace(tmp, out)

if __name__ == "__main__":
    if sys.argv[1] == "still":
        for t in sys.argv[2:]:
            frame(float(t)).save(f"/tmp/still_{t}.jpg", quality=88)
    else:
        a, b, out = float(sys.argv[2]), float(sys.argv[3]), sys.argv[4]
        render(a, b, out)
