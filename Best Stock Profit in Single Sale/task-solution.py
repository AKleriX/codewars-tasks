def max_profit(p):
    m,r=p[0],p[1]-p[0]
    for x in p[1:]:r=max(r,x-m);m=min(m,x)
    return r