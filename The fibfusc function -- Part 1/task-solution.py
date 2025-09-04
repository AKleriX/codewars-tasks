def fibfusc(n):
    if n<2:return[(1,0),(0,1)][n]
    x,y=fibfusc(n>>1);a=(x+y)*(x-y);b=y*(2*x+3*y)
    return(a,b)if n&1==0 else(-b,(x+2*y)*(x+4*y))