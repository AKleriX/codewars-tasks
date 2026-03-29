def rotate_corners(m):
    if len(m)==len(m[0])==2:return m
    v=lambda x:ord(x) if type(x) is str else x
    c=[m[0][0],m[0][-1],m[-1][-1],m[-1][0]]
    s=sum(map(v,c))
    k=s*(sum(v(x) for r in m for x in r)-s)%4
    c=c[-k:]+c[:-k]
    return [[c[0],c[1]],[c[3],c[2]]]