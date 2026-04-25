def count_nines(n):
    c, p = 0, 1
    while p <= n:
        c += n // (p * 10) * p + (n // p % 10 == 9) * (n % p + 1)
        p *= 10
    return c