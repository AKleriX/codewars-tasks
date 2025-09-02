class SecureList():
    def __init__(self, a=()):
        self.a = list(a)
    def __getitem__(self, i):
        if isinstance(i, slice):
            r = self.a[i]; del self.a[i]; return r
        return self.a.pop(i)
    def __len__(self): return len(self.a)
    def __str__(self):
        t = self.a; self.a = []; return str(t)
    __repr__ = __str__