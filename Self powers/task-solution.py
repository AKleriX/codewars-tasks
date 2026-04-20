def power(n):
    m = 10**10
    return str(sum(pow(k, k, m) for k in range(1, n + 1)) % m)