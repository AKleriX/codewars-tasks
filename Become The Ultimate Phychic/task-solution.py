def guess_it(n, m):
    s = m - 3 * n
    ans = []
    for green in range(n + 1):
        red = s - 2 * green
        blue = n - green - red
        if red >= 0 and blue >= 0:
            ans.append([green, red, blue])
    return ans