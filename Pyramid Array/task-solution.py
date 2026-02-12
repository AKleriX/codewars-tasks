def pyramid(n):
    res = []
    for i in range(1, n + 1):
        res.append([1] * i)
    return res