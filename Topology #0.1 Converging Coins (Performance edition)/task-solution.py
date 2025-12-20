from collections import defaultdict

def converge(g, coins):
    unique = tuple(set(coins))
    if len(unique) == 1:
        return 0
    
    n = len(unique)
    visited = set()
    candidates = defaultdict(dict)
    queue = [(u, 0, i) for i, u in enumerate(unique)]
    
    for u, _, i in queue:
        visited.add((u, 0, i))
        candidates[(u, 0)][i] = 0
    
    for v, d, c in queue:
        p = (d + 1) & 1
        for u in g.get(v, ()):
            key = (u, p, c)
            if key not in visited:
                visited.add(key)
                candidates[(u, p)][c] = d + 1
                queue.append((u, d + 1, c))
    
    result = None
    for dists in candidates.values():
        if len(dists) == n:
            m = max(dists.values())
            result = m if result is None else min(result, m)
    
    return result