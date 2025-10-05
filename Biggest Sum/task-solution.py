def find_sum(matrix: list[list[int]]) -> int:
    dp = [0] * len(matrix[0])
    for row in matrix:
        dp[0] += row[0]
        for j in range(1, len(row)):
            dp[j] = max(dp[j], dp[j - 1]) + row[j]
    return dp[-1]