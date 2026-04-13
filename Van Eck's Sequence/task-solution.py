def seq(n):
    d={}
    x=0
    for i in range(1,n):
        d[x],x=i,i-d.get(x,i)
    return x