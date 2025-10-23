def puzzle_solver(pieces, width, height):
    Lmap, Tmap, Rs, Bs, tl = {}, {}, [], [], None
    for i, ((a, b), (c, d), _) in enumerate(pieces):
        T, B, L, R = (a, b), (c, d), (a, c), (b, d)
        if T == (None, None) and L == (None, None): tl = i
        if L != (None, None): Lmap[L] = i
        if T != (None, None): Tmap[T] = i
        Rs.append(R); Bs.append(B)
    right = {i: Lmap[r] for i, r in enumerate(Rs) if r in Lmap}
    down = {i: Tmap[b] for i, b in enumerate(Bs) if b in Tmap}
    grid, start = [[0]*width for _ in range(height)], tl
    for r in range(height):
        cur = start
        for c in range(width):
            grid[r][c] = pieces[cur][2]
            if c < width-1: cur = right[cur]
        if r < height-1: start = down[start]
    return [tuple(row) for row in grid]