import re,base64,io
from PIL import Image
h=open('WEB-CUP-2.0-anteprima.html').read()
tot=[0,0]
def rep(m):
    data=base64.b64decode(m.group(2)); tot[0]+=len(data)
    try:
        im=Image.open(io.BytesIO(data)); im.load()
        if max(im.size)>1080: im.thumbnail((1080,1080),Image.LANCZOS)
        b=io.BytesIO()
        if im.mode in('RGBA','LA','P'): im=im.convert('RGBA'); im.save(b,'WEBP',quality=82,method=6)
        else: im.convert('RGB').save(b,'WEBP',quality=78,method=6)
        nd=b.getvalue()
        if len(nd)<len(data): tot[1]+=len(nd); return 'data:image/webp;base64,'+base64.b64encode(nd).decode()
    except Exception as e: pass
    tot[1]+=len(data); return m.group(0)
def rw(m):
    data=base64.b64decode(m.group(1)); im=Image.open(io.BytesIO(data)); im.load()
    if im.size[0]>432: im.thumbnail((432,540),Image.LANCZOS)
    b=io.BytesIO(); im.save(b,'WEBP',quality=60,method=6); nd=b.getvalue()
    return 'data:image/webp;base64,'+base64.b64encode(nd if len(nd)<len(data) else data).decode()
h=re.sub(r'data:image/webp;base64,([A-Za-z0-9+/=]+)',rw,h)
h2=re.sub(r'data:image/(jpeg|png);base64,([A-Za-z0-9+/=]+)',rep,h)
open('/mnt/user-data/outputs/webcup2.html','w').write(h2)
print(tot[0]//1024,tot[1]//1024,'KB img; file',len(h2)//1024,'KB')
