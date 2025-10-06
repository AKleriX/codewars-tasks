class FuncAdd:
    _f = {}
    _w = {}

    def __new__(cls, f):
        k = (f.__module__, f.__name__)
        cls._f.setdefault(k, []).append(f)
        if k in cls._w: return cls._w[k]
        def w(*a, **kw):
            if k not in cls._f: raise NameError(f.__name__)
            return tuple(g(*a, **kw) for g in cls._f[k])
        w.__name__ = w.__qualname__ = f.__name__
        w.__module__ = f.__module__
        cls._w[k] = w
        return w

    @classmethod
    def _drop(cls, k):
        import sys
        m = sys.modules.get(k[0])
        if m and k[1] in m.__dict__: del m.__dict__[k[1]]
        cls._f.pop(k, None)
        cls._w.pop(k, None)

    @classmethod
    def delete(cls, t):
        cls._drop((t.__module__, t.__name__))

    @classmethod
    def clear(cls):
        for k in list(cls._w): cls._drop(k)