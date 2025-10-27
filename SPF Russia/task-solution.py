from heapq import heappush, heappop
from collections import defaultdict, deque

def shortest_path(topology, start, end):
    if start == end:
        return [[start]]
    rev = defaultdict(dict)
    for u, neighbors in topology.items():
        for v, w in neighbors.items():
            rev[v][u] = w
    dist = {}
    pq = [(0, end)]
    while pq:
        d, u = heappop(pq)
        if u in dist:
            continue
        dist[u] = d
        for v, w in rev.get(u, {}).items():
            if v not in dist:
                heappush(pq, (d + w, v))
    if start not in dist:
        return []
    dag = defaultdict(list)
    for u, neighbors in topology.items():
        du = dist.get(u)
        if du is None:
            continue
        for v, w in neighbors.items():
            dv = dist.get(v)
            if dv is not None and du == w + dv:
                dag[u].append(v)
    rdag = defaultdict(list)
    for u, vs in dag.items():
        for v in vs:
            rdag[v].append(u)
    steps = {end: 0}
    q = deque([end])
    while q:
        u = q.popleft()
        for v in rdag.get(u, []):
            if v not in steps:
                steps[v] = steps[u] + 1
                q.append(v)
    if start not in steps:
        return []
    res, path = [], [start]
    def dfs(u):
        if u == end:
            res.append(path.copy())
            return
        for v in sorted(dag.get(u, [])):
            if steps.get(v) == steps[u] - 1:
                path.append(v)
                dfs(v)
                path.pop()
    dfs(start)
    res.sort()
    return res