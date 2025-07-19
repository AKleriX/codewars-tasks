def group(a, i):
    n = [j for j in range(len(a[0])) if j not in i]
    d = {}
    for r in a:
        k = tuple(r[j] for j in i)
        d[k] = [x + y for x, y in zip(d.get(k, [0] * len(n)), (r[j] for j in n))]
    return d