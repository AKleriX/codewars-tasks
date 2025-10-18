class IPv4Address:
    __slots__ = ('_n',)
    _cache = {}

    def __new__(cls, x):
        if isinstance(x, (list, tuple)):
            if len(x) != 4 or any(type(v) is not int or not 0 <= v < 256 for v in x) or x[0] == 0:
                raise ValueError('invalid parts')
            n = (x[0] << 24) | (x[1] << 16) | (x[2] << 8) | x[3]
        elif isinstance(x, (bytes, bytearray)):
            if len(x) != 4:
                raise ValueError('invalid bytes length')
            n = int.from_bytes(x, 'big')
            if n >> 24 == 0:
                raise ValueError('first octet zero')
        elif isinstance(x, str):
            p = x.split('.')
            if len(p) != 4:
                raise ValueError('invalid string')
            q = []
            for s in p:
                if not s.isdigit():
                    raise ValueError('invalid octet')
                v = int(s)
                if not 0 <= v < 256:
                    raise ValueError('octet out of range')
                q.append(v)
            if q[0] == 0:
                raise ValueError('first octet zero')
            n = (q[0] << 24) | (q[1] << 16) | (q[2] << 8) | q[3]
        elif isinstance(x, IPv4Address):
            n = int(x)
        elif isinstance(x, int):
            if not 0 <= x < 1 << 32 or x >> 24 == 0:
                raise ValueError('int out of range or first octet zero')
            n = x
        else:
            raise TypeError('unsupported type')
        if n in cls._cache:
            return cls._cache[n]
        self = super().__new__(cls)
        object.__setattr__(self, '_n', n)
        cls._cache[n] = self
        return self

    def __init__(self, parts):
        pass

    def __setattr__(self, k, v):
        raise AttributeError('immutable')

    @classmethod
    def from_string(cls, s):
        return cls(s)

    @property
    def parts(self):
        return tuple((self._n >> s) & 255 for s in (24, 16, 8, 0))

    def __str__(self):
        return '.'.join(map(str, self.parts))

    def __repr__(self):
        return f"IPv4Address('{self}')"

    def __int__(self):
        return self._n

    def __bytes__(self):
        return self._n.to_bytes(4, 'big')

    @property
    def packed(self):
        return bytes(self)

    def _coerce(self, other):
        if not isinstance(other, IPv4Address):
            raise ValueError('can only compare IPv4Address')
        return other._n

    def __eq__(self, other):
        return self._n == self._coerce(other)

    def __ne__(self, other):
        return self._n != self._coerce(other)

    def __lt__(self, other):
        return self._n < self._coerce(other)

    def __le__(self, other):
        return self._n <= self._coerce(other)

    def __gt__(self, other):
        return self._n > self._coerce(other)

    def __ge__(self, other):
        return self._n >= self._coerce(other)

    def __hash__(self):
        return hash(self._n)