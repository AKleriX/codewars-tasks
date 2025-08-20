def square(a,b):
    l,h=0,int((a+b)//4)
    while l<h:
        m=(l+h+1)//2
        l,h=(m,h) if a//m+b//m>=4 else (l,m-1)
    return l