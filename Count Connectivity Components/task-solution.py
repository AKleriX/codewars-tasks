from collections import deque, Counter

def components(grid: str) -> list[tuple[int, int]]:
    lines = [line.rstrip('\n') for line in grid.splitlines() if line.strip()]
    if not lines:
        return []
    width = max(len(line) for line in lines)
    lines = [line.ljust(width) for line in lines]
    rows = (len(lines) - 1) // 2
    cols = (width - 1) // 3
    visited = [[False] * cols for _ in range(rows)]
    sizes: list[int] = []

    for r in range(rows):
        for c in range(cols):
            if visited[r][c]:
                continue
            q = deque([(r, c)])
            visited[r][c] = True
            size = 0
            while q:
                cr, cc = q.popleft()
                size += 1
                ar = 2 * cr + 1
                if cr > 0:
                    hr = 2 * cr
                    x = 3 * cc + 1
                    if lines[hr][x] == lines[hr][x + 1] == " " and not visited[cr - 1][cc]:
                        visited[cr - 1][cc] = True
                        q.append((cr - 1, cc))
                if cr < rows - 1:
                    hr = 2 * (cr + 1)
                    x = 3 * cc + 1
                    if lines[hr][x] == lines[hr][x + 1] == " " and not visited[cr + 1][cc]:
                        visited[cr + 1][cc] = True
                        q.append((cr + 1, cc))
                if cc > 0:
                    vc = 3 * cc
                    if lines[ar][vc] == " " and not visited[cr][cc - 1]:
                        visited[cr][cc - 1] = True
                        q.append((cr, cc - 1))
                if cc < cols - 1:
                    vc = 3 * (cc + 1)
                    if lines[ar][vc] == " " and not visited[cr][cc + 1]:
                        visited[cr][cc + 1] = True
                        q.append((cr, cc + 1))
            sizes.append(size)

    counter = Counter(sizes)
    return sorted(counter.items(), key=lambda p: -p[0])