def connect_four_place(c):
    b=[['-']*7 for _ in range(6)]
    for i,x in enumerate(c):
        p='YR'[i&1]
        for r in range(5,-1,-1):
            if b[r][x]=='-':
                b[r][x]=p;break
    return b