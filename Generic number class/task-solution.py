def create_number_class(a):
    class N:
        def __init__(s,v):s.a=a;s.v=sum(a.index(c)*len(a)**(len(v)-i-1)for i,c in enumerate(v))if isinstance(v,str)else v
        def __str__(s):
            r,v='',s.v
            while v:r=s.a[v%len(s.a)]+r;v//=len(s.a)
            return r or s.a[0]
        def __add__(s,o):return N(s.v+o.v)
        def __sub__(s,o):return N(s.v-o.v)
        def __mul__(s,o):return N(s.v*o.v)
        def __floordiv__(s,o):return N(s.v//o.v)
        def convert_to(s,c):return c(s.v)
    return N