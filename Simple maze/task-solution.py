def has_exit(m):
    k=[(r,c)for r,l in enumerate(m)for c,x in enumerate(l)if x=='k']
    if len(k)!=1:raise Exception()
    q,v=[k[0]],{k[0]}
    while q:
        r,c=q.pop(0)
        if r in[0,len(m)-1]or c in[0,len(m[r])-1]:return True
        for d,e in[(0,1),(0,-1),(1,0),(-1,0)]:
            n=r+d,c+e
            if 0<=n[0]<len(m)and 0<=n[1]<len(m[n[0]])and m[n[0]][n[1]]!='#'and n not in v:v.add(n);q.append(n)
    return False