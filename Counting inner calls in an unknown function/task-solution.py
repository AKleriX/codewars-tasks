import sys

def count_calls(f, *a, **k):
    n=0;i=0
    def p(fr,e,arg):
        nonlocal n,i
        if e=='call':
            if not i and fr.f_code is f.__code__: i=1
            elif i: n+=1
        elif e=='return' and i and fr.f_code is f.__code__: i=0
        elif e=='c_call' and i: n+=1
    sys.setprofile(p)
    try:
        r=f(*a,**k)
    finally:
        sys.setprofile(None)
    return n,r