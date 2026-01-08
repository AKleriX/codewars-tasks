from itertools import chain

def solve(cells):
  n = len(cells)
  vals = sorted(set(chain.from_iterable(cells)))
  m = len(vals)
  pos = {v: i for i, v in enumerate(vals)}
  cand = [{pos[v] for v in s} for s in cells]
  allv = list(range(m))
  adj = [sorted(s) for s in cand] + [allv] * (m - n)

  mv = [-1] * m
  mu = [-1] * m

  def aug(u, seen):
    for v in adj[u]:
      if seen[v]:
        continue
      seen[v] = 1
      w = mv[v]
      if w < 0 or aug(w, seen):
        mv[v] = u
        mu[u] = v
        return 1
    return 0

  for u in sorted(range(m), key=lambda i: len(adj[i])):
    aug(u, [0] * m)

  g = [[] for _ in range(2 * m)]
  gr = [[] for _ in range(2 * m)]
  for u in range(m):
    v = mu[u]
    g[u].append(m + v)
    gr[m + v].append(u)
    for w in adj[u]:
      if w != v:
        g[m + w].append(u)
        gr[u].append(m + w)

  seen = [0] * (2 * m)
  order = []

  def dfs(v):
    seen[v] = 1
    for to in g[v]:
      if not seen[to]:
        dfs(to)
    order.append(v)

  for v in range(2 * m):
    if not seen[v]:
      dfs(v)

  comp = [-1] * (2 * m)

  def rdfs(v, c):
    comp[v] = c
    for to in gr[v]:
      if comp[to] < 0:
        rdfs(to, c)

  c = 0
  for v in reversed(order):
    if comp[v] < 0:
      rdfs(v, c)
      c += 1

  return [{vals[v] for v in cand[i] if mu[i] == v or comp[i] == comp[m + v]} for i in range(n)]