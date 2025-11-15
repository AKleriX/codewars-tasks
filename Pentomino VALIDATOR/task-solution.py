def is_valid_solution(grid_str):
    def canon(cells):
        variants = []
        for flip in (1, -1):
            for rot in range(4):
                t = []
                for r, c in cells:
                    x, y = r, c
                    for _ in range(rot):
                        x, y = y, -x
                    t.append((flip * x, y))
                minx = min(x for x, _ in t)
                miny = min(y for _, y in t)
                variants.append(tuple(sorted((x - minx, y - miny) for x, y in t)))
        return min(variants)

    shapes = {
        'I': ((0, 0), (0, 1), (0, 2), (0, 3), (0, 4)),
        'X': ((0, 1), (1, 0), (1, 1), (1, 2), (2, 1)),
        'Z': ((0, 0), (0, 1), (1, 1), (2, 1), (2, 2)),
        'P': ((0, 0), (0, 1), (0, 2), (1, 0), (1, 1)),
        'L': ((0, 0), (0, 1), (0, 2), (0, 3), (1, 0)),
        'F': ((0, 0), (0, 1), (1, 1), (1, 2), (2, 1)),
        'W': ((0, 0), (0, 1), (1, 1), (1, 2), (2, 2)),
        'V': ((0, 0), (0, 1), (0, 2), (1, 0), (2, 0)),
        'T': ((0, 0), (0, 1), (0, 2), (1, 1), (2, 1)),
        'U': ((0, 0), (0, 1), (0, 2), (1, 0), (1, 2)),
        'N': ((0, 0), (0, 1), (0, 2), (1, 2), (1, 3)),
        'Y': ((0, 0), (0, 1), (0, 2), (0, 3), (1, 1)),
    }

    rows = grid_str.split('\n')
    h, w = len(rows), len(rows[0])
    if any(len(row) != w for row in rows):
        return False

    seen = [[False] * w for _ in range(h)]
    used = set()

    for r in range(h):
        for c in range(w):
            ch = rows[r][c]
            if ch == '-' or seen[r][c]:
                continue
            if ch not in shapes:
                return False
            stack = [(r, c)]
            seen[r][c] = True
            cells = []
            while stack:
                i, j = stack.pop()
                cells.append((i, j))
                for di, dj in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    ni, nj = i + di, j + dj
                    if 0 <= ni < h and 0 <= nj < w and not seen[ni][nj] and rows[ni][nj] == ch:
                        seen[ni][nj] = True
                        stack.append((ni, nj))
            if len(cells) != 5 or canon(cells) != shapes[ch] or ch in used:
                return False
            used.add(ch)

    return True