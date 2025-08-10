def lazy(n):
    def d(f):
        i=0;m=abs(n)
        def w(*a,**k):
            nonlocal i;i+=1
            return f(*a,**k) if ((i-1)%m==0 if n>0 else i%m) else None
        return w
    return d