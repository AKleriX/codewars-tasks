class DimensionsOutOfBoundError(Exception): pass

class Package:
    B={'length':(0,350),'width':(0,300),'height':(0,150),'weight':(0,40)}
    def __init__(s,*a): [setattr(s,k,v) for k,v in zip(s.B,a)]
    def _c(s,k,v):
        lo,hi=s.B[k]
        if not lo<v<=hi: raise DimensionsOutOfBoundError(f"Package {k}=={v} out of bounds, should be: {lo} < {k} <= {hi}")
    def __setattr__(s,k,v):
        if k in s.B: s._c(k,v)
        object.__setattr__(s,k,v)
    @property
    def volume(s): return s.length*s.width*s.height