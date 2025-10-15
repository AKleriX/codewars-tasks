from collections import deque
from heapq import heappush, heappop

def dry_ground(terrain):
    h, w = len(terrain), (len(terrain[0]) if terrain else 0)
    A = [[0]*w for _ in range(h)]
    q = deque()
    for r in range(h):
        for c in range(w):
            if terrain[r][c] == '^':
                for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
                    nr, nc = r+dr, c+dc
                    if not (0 <= nr < h and 0 <= nc < w) or terrain[nr][nc] != '^':
                        A[r][c] = 1
                        q.append((r, c))
                        break
    while q:
        r, c = q.popleft()
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            nr, nc = r+dr, c+dc
            if 0 <= nr < h and 0 <= nc < w and terrain[nr][nc] == '^' and A[nr][nc] == 0:
                A[nr][nc] = A[r][c] + 1
                q.append((nr, nc))
    INF = 10**9
    R = [[INF]*w for _ in range(h)]
    pq = []
    for r in range(h):
        for c in range(w):
            if terrain[r][c] == '-':
                R[r][c] = -1
                heappush(pq, (-1, r, c))
    while pq:
        cost, r, c = heappop(pq)
        if cost != R[r][c]:
            continue
        for dr, dc in ((1,0),(-1,0),(0,1),(0,-1)):
            nr, nc = r+dr, c+dc
            if 0 <= nr < h and 0 <= nc < w:
                ncost = max(cost, A[nr][nc])
                if ncost < R[nr][nc]:
                    R[nr][nc] = ncost
                    heappush(pq, (ncost, nr, nc))
    tot = sum(terrain[r][c] != '-' for r in range(h) for c in range(w))
    return tuple(tot - sum(terrain[r][c] != '-' and R[r][c] < d for r in range(h) for c in range(w)) for d in range(4))