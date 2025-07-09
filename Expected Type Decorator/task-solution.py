class UnexpectedTypeException(Exception):pass
def expected_type(t):
    def d(f):
        def w(*a,**k):
            r=f(*a,**k)
            if not isinstance(r,t):raise UnexpectedTypeException('Was expecting instance of: '+', '.join(i.__name__ for i in t))
            return r
        return w
    return d