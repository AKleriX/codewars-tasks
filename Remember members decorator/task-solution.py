def remember(cls):
    class Meta(type(cls)):
        def __call__(cls, *args, **kwargs):
            key = args[0] if len(args) == 1 else args
            if key in cls._remembered:
                return cls._remembered[key]
            obj = super().__call__(*args, **kwargs)
            cls._remembered[key] = obj
            return obj
        def __getitem__(cls, key):
            return cls._remembered[key]
        def __iter__(cls):
            return iter(cls._remembered)
    d = dict(cls.__dict__)
    d['_remembered'] = {}
    d['__class_getitem__'] = classmethod(lambda c, k: c._remembered[k])
    return Meta(cls.__name__, cls.__bases__, d)