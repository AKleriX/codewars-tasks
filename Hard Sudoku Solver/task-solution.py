def solve(board):
    R, C, B, E = [0]*9, [0]*9, [0]*9, []
    for i, row in enumerate(board):
        for j, v in enumerate(row):
            if v:
                bit = 1 << v
                R[i] |= bit; C[j] |= bit; B[(i//3)*3 + j//3] |= bit
            else:
                E.append((i, j))
    def mrv():
        best = 10; bi = bj = -1; bm = 0
        for i, j in E:
            if board[i][j]: continue
            m = ~(R[i] | C[j] | B[(i//3)*3 + j//3]) & 1022
            if m == 0: return -1, -1, 0
            c = m.bit_count()
            if c < best: best, bi, bj, bm = c, i, j, m
            if best == 1: break
        return bi, bj, bm
    def dfs():
        i, j, m = mrv()
        if i == -1:
            return all(board[x][y] for x, y in E)
        k = (i//3)*3 + j//3
        while m:
            d = m & -m; m -= d
            v = d.bit_length() - 1; bit = 1 << v
            board[i][j] = v; R[i] |= bit; C[j] |= bit; B[k] |= bit
            if dfs(): return True
            R[i] ^= bit; C[j] ^= bit; B[k] ^= bit; board[i][j] = 0
        return False
    dfs()
    return board