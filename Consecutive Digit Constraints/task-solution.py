def number_of_numbers(n):
    if n == 1:
        return 9
    dp = [[0]*10 for _ in range(10)]
    for a in range(1, 10):
        for b in range(10):
            if a + b <= 9:
                dp[a][b] = 1
    if n == 2:
        return sum(map(sum, dp))
    for _ in range(3, n + 1):
        ndp = [[0]*10 for _ in range(10)]
        for a in range(10):
            for b in range(10):
                v = dp[a][b]
                if v:
                    lim = 9 - (a + b)
                    if lim >= 0:
                        for c in range(lim + 1):
                            ndp[b][c] += v
        dp = ndp
    return sum(map(sum, dp))