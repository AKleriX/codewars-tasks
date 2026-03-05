def zeros(n: int) -> int:
    if n == 1:
        return 2
    dp1, dp0 = 1, 0
    for _ in range(2, n + 1):
        dp1, dp0 = dp1 + dp0, dp1
    return dp1 + dp0