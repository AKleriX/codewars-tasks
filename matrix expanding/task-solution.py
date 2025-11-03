def expand(maze, fill):
    n = len(maze); h = n // 2
    res = [[fill] * (2 * n) for _ in range(2 * n)]
    for i, row in enumerate(maze):
        res[h + i][h:h + n] = row
    return res