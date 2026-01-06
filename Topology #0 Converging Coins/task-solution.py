from collections import deque

def converge(g, u1, u2, u3):
    vertices = set(g) | {u1, u2, u3}
    for ns in g.values():
        vertices |= set(ns)
    g = {v: set(g.get(v, ())) for v in vertices}

    if u1 == u2 == u3:
        return 0

    INF = 10**18

    def bfs(start):
        dist = {v: [INF, INF] for v in vertices}
        dist[start][0] = 0
        q = deque([(start, 0)])
        while q:
            v, p = q.popleft()
            np, nd = p ^ 1, dist[v][p] + 1
            for w in g[v]:
                if dist[w][np] > nd:
                    dist[w][np] = nd
                    q.append((w, np))
        return dist

    dists = [bfs(u) for u in (u1, u2, u3)]

    best = INF
    for v in vertices:
        has_edge = bool(g[v])
        for p in (0, 1):
            t = max(d[v][p] for d in dists)
            if t < best and t < INF and (t == 0 or has_edge):
                best = t

    return None if best == INF else best