from math import gcd
def how_many(m, x):
    if m < 1: return 0
    a, op, b = x.split(); a, b = int(a), int(b)
    l = a * b // gcd(a, b)
    return m // l if op == 'and' else m // a + m // b - m // l