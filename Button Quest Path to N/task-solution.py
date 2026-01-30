def count_ways(n):
    f = {1: 1}
    for i in range(2, n + 1):
        f[i] = f[i - 1] + (f[i // 2] if i % 2 == 0 else 0)
    return f[n]