def solve(arr):
    def factor(x, p):
        c = 0
        while not x % p:
            x //= p
            c += 1
        return c
    
    counts = {}
    for x in arr:
        counts[x] = (factor(x, 3), factor(x, 2))
    return sorted(arr, key = lambda x: (-counts[x][0], counts[x][1]))