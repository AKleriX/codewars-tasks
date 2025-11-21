def split_list(xs):
    n = len(xs)
    total = sum(xs)
    best_diff = total
    best_mask = 0
    for mask in range(1 << n):
        s = 0
        for i, x in enumerate(xs):
            if mask & (1 << i):
                s += x
        diff = abs(total - 2 * s)
        if diff < best_diff:
            best_diff = diff
            best_mask = mask
            if diff == 0:
                break
    a, b = [], []
    for i, x in enumerate(xs):
        (a if best_mask & (1 << i) else b).append(x)
    return a, b