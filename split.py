import re,base64,hashlib,os,shutil
out='pub'; shutil.rmtree(out,ignore_errors=True); os.makedirs(out+'/img')
h=open('WEB-CUP-2.0-anteprima.html').read()
def rep(m):
    ext={'jpeg':'jpg','png':'png','webp':'webp','gif':'gif'}.get(m.group(1),m.group(1))
    data=base64.b64decode(m.group(2)); n=hashlib.md5(data).hexdigest()[:12]+'.'+ext
    p=f'{out}/img/{n}'
    if not os.path.exists(p): open(p,'wb').write(data)
    return 'img/'+n
h2=re.sub(r'data:image/(jpeg|png|webp|gif);base64,([A-Za-z0-9+/=]+)',rep,h)
open(out+'/index.html','w').write(h2)
print(len(h2)//1024,'KB', len(os.listdir(out+'/img')),'imgs', sum(os.path.getsize(out+'/img/'+f) for f in os.listdir(out+'/img'))//1024,'KB')
