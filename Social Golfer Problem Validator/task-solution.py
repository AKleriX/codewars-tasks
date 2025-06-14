def valid(a):
    if not a:return True
    s,p=set(''.join(a[0])),set()
    if any(len(d)!=len(a[0])or set(''.join(d))!=s or len(''.join(d))!=len(s)for d in a)or any(len(g)!=len(a[0][0])for d in a for g in d):return False
    for d in a:
        for g in d:
            for i,x in enumerate(g):
                for y in g[i+1:]:
                    if(min(x,y),max(x,y))in p:return False
                    p.add((min(x,y),max(x,y)))
    return True