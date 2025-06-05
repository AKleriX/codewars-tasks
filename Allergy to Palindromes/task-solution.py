def count_pal(n):
    exact = 9 * 10**((n - 1) // 2)
    p = (n + 1) // 2
    q = n // 2
    total = 10**p + 10**q - 2
    return [exact, total]