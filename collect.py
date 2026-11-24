import json,glob,re,os
for f in glob.glob('/tmp/claude-tool-results/*/*batch*.txt')+glob.glob('/tmp/claude-tool-results/*/*javascript_tool*.txt'):
    try: d=json.load(open(f))
    except Exception: continue
    for x in d:
        t=x.get('text','')
        for m in re.finditer(r'<<<(\d+)>>>(.*?)<<<E>>>',t,re.S):
            s=m.group(2)
            if len(s)>=200000 or True:
                try: s2=json.loads('"'+s+'"')
                except Exception: s2=s
                open(f'/home/claude/webcup2/hr/{m.group(1)}.txt','w').write(s2)
print(sorted(int(os.path.basename(p)[:-4]) for p in glob.glob('/home/claude/webcup2/hr/*.txt')))
print({os.path.basename(p):os.path.getsize(p) for p in glob.glob('/home/claude/webcup2/hr/*.txt')})
