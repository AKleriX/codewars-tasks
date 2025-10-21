def first_impossible(stones):
    from collections import defaultdict
    grid = {tuple(p): 1 for p in stones}
    dirs = [(dx, dy) for dx in (-1, 0, 1) for dy in (-1, 0, 1) if dx or dy]
    def neigh(c):
        x, y = c
        for dx, dy in dirs:
            yield x + dx, y + dy
    sums = defaultdict(int)
    for c in grid:
        for q in neigh(c):
            if q not in grid:
                sums[q] += 1
    def place(c, v, g, s):
        g[c] = v
        s.pop(c, None)
        for q in neigh(c):
            if q not in g:
                s[q] += v
    def search(v, g, s):
        cands = [c for c, t in s.items() if t == v]
        if not cands:
            return v
        best = v
        for c in sorted(cands):
            ng, ns = g.copy(), s.copy()
            place(c, v, ng, ns)
            best = max(best, search(v + 1, ng, ns))
        return best
    return search(2, grid, sums)