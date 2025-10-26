def string_func(s, x):
    n = len(s)
    if n < 2 or x == 0:
        return s
    half = n // 2
    def nxt(i):
        return 2*i + 1 if i < half else 2*(n - 1 - i)
    vis = bytearray(n)
    dest = [0] * n
    for i in range(n):
        if not vis[i]:
            cyc = []
            j = i
            while not vis[j]:
                vis[j] = 1
                cyc.append(j)
                j = nxt(j)
            L = len(cyc)
            k = x % L
            for t, u in enumerate(cyc):
                dest[u] = cyc[(t + k) % L]
    try:
        from array import array
        r = array('u', '\0' * n)
        for j, c in enumerate(s):
            r[dest[j]] = c
        return r.tounicode()
    except:
        r = [''] * n
        for j, c in enumerate(s):
            r[dest[j]] = c
        return ''.join(r)