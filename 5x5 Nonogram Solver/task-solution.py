class Nonogram:
    def __init__(self, clues):
        self.C, self.R = clues

    def solve(self):
        from itertools import product
        n = len(self.R)

        def runs(seq):
            out, c = [], 0
            for v in seq:
                if v: c += 1
                elif c: out.append(c); c = 0
            if c: out.append(c)
            return out

        def ok_prefix(col, clue):
            i, r = 0, 0
            if not clue:
                return 1 not in col
            for v in col:
                if v:
                    if i == len(clue): return False
                    r += 1
                    if r > clue[i]: return False
                else:
                    if r:
                        if r != clue[i]: return False
                        i, r = i + 1, 0
            rem = n - len(col)
            if r:
                m = len(clue) - i
                need = (clue[i] - r) + sum(clue[i + 1:]) + (m - 1)
            else:
                m = len(clue) - i
                need = sum(clue[i:]) + (m - 1 if m > 0 else 0)
            return need <= rem

        opts = [[t for t in product((0, 1), repeat=n) if runs(t) == list(cl)]
                for cl in self.R]

        grid = []

        def dfs(i):
            if i == n:
                cols = list(zip(*grid))
                if all(runs(c) == list(cl) for c, cl in zip(cols, self.C)):
                    return tuple(map(tuple, grid))
                return None
            for row in opts[i]:
                grid.append(row)
                if all(ok_prefix([grid[k][j] for k in range(i + 1)], self.C[j]) for j in range(n)):
                    res = dfs(i + 1)
                    if res: return res
                grid.pop()
            return None

        return dfs(0)