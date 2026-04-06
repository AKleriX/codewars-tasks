def expansion(matrix, n):
    for _ in range(n):
        rows = [sum(r) for r in matrix]
        cols = [sum(c) for c in zip(*matrix)]
        diag = sum(matrix[i][i] for i in range(len(matrix)))
        matrix = [r + [s] for r, s in zip(matrix, rows)] + [cols + [diag]]
    return matrixas