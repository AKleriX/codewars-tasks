def calc(A, n):
    def mul(X, Y):
        Y = list(zip(*Y))
        return [[sum(a * b for a, b in zip(r, c)) for c in Y] for r in X]

    m = len(A)
    R = [[int(i == j) for j in range(m)] for i in range(m)]
    while n:
        if n & 1:
            R = mul(R, A)
        A = mul(A, A)
        n //= 2
    return R