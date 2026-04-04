def identify_bb(bearings, weigh):
    n = len(bearings)
    w = weigh(*(b for i, b in enumerate(bearings, 1) for _ in range(i)))
    return bearings[w - 5 * n * (n + 1) - 1]