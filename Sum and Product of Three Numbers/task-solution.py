from math import isqrt

def number_of_sets(a, b):
    n = 0
    for x in range(1, a // 3 + 1):
        if b % x:
            continue
        m = b // x
        for y in range(x, min((a - x) // 2, isqrt(m)) + 1):
            if m % y:
                continue
            z = m // y
            n += x + y + z == a and y <= z
    return n