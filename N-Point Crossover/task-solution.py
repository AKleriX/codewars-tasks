def crossover(ns, xs, ys):
    points = sorted(set(ns))
    n = len(xs)
    c1, c2 = [], []
    prev = 0
    flip = False
    for p in points + [n]:
        if not flip:
            c1.extend(xs[prev:p])
            c2.extend(ys[prev:p])
        else:
            c1.extend(ys[prev:p])
            c2.extend(xs[prev:p])
        flip = not flip
        prev = p
    return (c1, c2)