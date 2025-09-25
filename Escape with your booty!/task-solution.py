def check_course(sea_map):
    h,w=len(sea_map),len(sea_map[0]);m=h-1;p=m*2 or 1
    sr,sc=[(i,j) for i,r in enumerate(sea_map) for j,c in enumerate(r) if c=='X'][0]
    if any(abs(i-sr)<2 and abs(j-sc)<2 for i,r in enumerate(sea_map) for j,c in enumerate(r) if c=='N'):return False
    f=(lambda x:0) if not m else (lambda x:(lambda r:r if r<=m else p-r)(x%p))
    cols=[[(0,1)]*(sea_map[0][j]=='N')+[(m,-1)]*(sea_map[-1][j]=='N') for j in range(w)]
    for c in range(sc+1,w):
        if any(abs(f(i+d*(c-sc))-sr)<2 and abs(j-c)<2 for j,v in enumerate(cols) for i,d in v):return False
    return True