def _perm(m):
    e = (m + 1) // 2
    return [i // 2 if i % 2 == 0 else e + i // 2 for i in range(m)]

def _pow_perm(p, n):
    r = list(range(len(p)))
    while n:
        if n & 1:
            r = [p[i] for i in r]
        p = [p[i] for i in p]
        n //= 2
    return r

def _apply(s, p):
    t = [''] * len(s)
    for i, c in enumerate(s):
        t[p[i]] = c
    return ''.join(t)

def jumbled_string(s, n):
    return _apply(s, _pow_perm(_perm(len(s)), n))

def unjumbled_string(s, n):
    p = _perm(len(s))
    inv = [0] * len(p)
    for i, j in enumerate(p):
        inv[j] = i
    return _apply(s, _pow_perm(inv, n))