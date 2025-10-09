import inspect

class LazyInit(type):
    def __new__(m, n, b, d):
        f = d.get('__init__')
        if f:
            names = [p.name for p in inspect.signature(f).parameters.values()][1:]
            def __init__(self, *a):
                for k, v in zip(names, a): setattr(self, k, v)
                f(self, *a)
            d['__init__'] = __init__
        return super().__new__(m, n, b, d)