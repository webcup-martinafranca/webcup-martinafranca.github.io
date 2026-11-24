import sys,base64,io,glob,os
from PIL import Image
_g=glob.glob('/tmp/claude-tool-results/*/')
d=_g[0] if _g else 'emb/'  # emb/: immagini già ritagliate, recuperate dal sito pubblicato
m={'1/HOME%20WEB%20CUP%20APP%20(1).jpg':'mcp-remote-devices-blob-1795106872256-l2rg3w-c2b52d3b.jpg',
'1/PADEL%20(2).jpg':'mcp-remote-devices-blob-1795106889737-mtl9zx-f6e32564.jpg',
'1/PADEL.jpg':'mcp-remote-devices-blob-1795106889737-rxyqq4-cbbcb49c.jpg',
'1/CALCIO.jpg':'mcp-remote-devices-blob-1795106889738-f73pe7-2b512bc7.jpg',
'ConsoleDocuments/Copia%20di%20Copia%20di%20GIRONI%20(1).jpg':'mcp-remote-devices-blob-1795106890941-ir4o94-23d5eb35.jpg'}
import time as _t
_BV=_t.strftime('%Y%m%d%H%M%S')
open('version.txt','w').write(_BV)
h=open('index.html').read().replace('/*__BUILD__*/',_BV).replace('/*__DATA__*/', open('data.js').read()).replace('/*__GAZ__*/', open('gazzettino.js').read()).replace('/*__TEN__*/', open('tennis.js').read()).replace('/*__PAD__*/', open('padel.js').read()).replace('/*__PRIV__*/', open('privacy.js').read()).replace('/*__GAZT__*/', open('gazzettino_thumbs.js').read())
def png(f,sz):
    im=Image.open(f); im.thumbnail((sz,sz)); b=io.BytesIO(); im.save(b,'PNG',optimize=True); return "data:image/png;base64,"+base64.b64encode(b.getvalue()).decode()
js="const EMB={"
for k,f in m.items():
    im=Image.open(d+f).convert('RGB')
    if k=='1/PADEL.jpg' and d!='emb/': W,H=im.size; im=im.crop((0,7,W-1,H)).resize((W,H),Image.LANCZOS)
    b=io.BytesIO(); im.save(b,'JPEG',quality=82,optimize=True)
    js+=f'"{k}":"data:image/jpeg;base64,{base64.b64encode(b.getvalue()).decode()}",'
js+="};\nconst TBTN={"+"".join(f'"{os.path.basename(f)[:-4]}":"data:image/jpeg;base64,{base64.b64encode(open(f,"rb").read()).decode()}",' for f in sorted(glob.glob('tennis/*.jpg')))+"};\n"
js+="const LOGHI={"+"".join(f'"{os.path.basename(f)[:-4]}":"{png(f,220)}",' for f in sorted(glob.glob('logos/*.png')))+"};\n"
import json as _j
_fm=_j.load(open('foto/map.json'))
js+="const FOTO={"+"".join('"%s":"data:image/jpeg;base64,%s",'%(k.replace('"','\\"'),base64.b64encode(open('foto/'+v,'rb').read()).decode()) for k,v in _fm.items())+"};\n"
js+="const TROFEI_S={"+"".join(f'"{os.path.basename(f)[:-4]}":"{png(f,72)}",' for f in sorted(glob.glob('trofei/*.png')))+"};\n"
js+="const WLOGO={"+"".join(f'"{os.path.basename(f)[:-4]}":"{png(f,260)}",' for f in sorted(glob.glob('wlogo/*.png')))+"};\n"
_pm=_j.load(open('padelfoto/map.json'))
js+="const PFOTO={"+"".join('"%s":"data:image/jpeg;base64,%s",'%(k,base64.b64encode(open('padelfoto/'+v,'rb').read()).decode()) for k,v in _pm.items())+"};\n"
js+="const MEDALI={"+"".join(f'"{os.path.basename(f)[:-4]}":"data:image/png;base64,{base64.b64encode(open(f,"rb").read()).decode()}",' for f in sorted(glob.glob('medaglie/*.png')))+"};\n"
js+="const SPONSOR={"+"".join(f'"{os.path.basename(f)[:-4]}":"data:image/jpeg;base64,{base64.b64encode(open(f,"rb").read()).decode()}",' for f in sorted(glob.glob('sponsor/*.jpg')))+"".join(f'"{os.path.basename(f)[:-4]}":"{png(f,600)}",' for f in sorted(glob.glob('sponsor/*.png')))+"};\n"
js+="const TROFEI={"+"".join(f'"{os.path.basename(f)[:-4]}":"{png(f,180)}",' for f in sorted(glob.glob('trofei/*.png')))+"};\n"
old='const IMG = p => `https://f2x9b.emailsp.com/documenti/${p}`;'
assert old in h
h=h.replace(old, js+'const IMG = p => EMB[p] || `https://f2x9b.emailsp.com/documenti/${p}`;')
open('WEB-CUP-2.0-anteprima.html','w').write(h); print(len(h))
