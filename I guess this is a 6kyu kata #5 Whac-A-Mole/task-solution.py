def whac_a_mole(a):
    n = 0
    for d in sorted(x for r in a for x in r if x):
        n += n < 2 * d
    return n