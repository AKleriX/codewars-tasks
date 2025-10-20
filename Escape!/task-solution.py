from collections import deque

def escape(grid):
  h, w = len(grid), len(grid[0])
  all_keys, start = 0, None
  for y, row in enumerate(grid):
    for x, c in enumerate(row):
      if c == '@': start = (x, y)
      if c.islower(): all_keys |= 1 << (ord(c) - ord('a'))
  q = deque([(start[0], start[1], 0)])
  prev = {(start[0], start[1], 0): None}
  while q:
    x, y, ks = q.popleft()
    if grid[y][x] == '$' and ks == all_keys:
      path, s = [], (x, y, ks)
      while s is not None:
        px, py, _ = s
        path.append((px, py))
        s = prev[s]
      return path[::-1]
    for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
      nx, ny = x + dx, y + dy
      if 0 <= nx < w and 0 <= ny < h:
        ch = grid[ny][nx]
        if ch == '#': continue
        if ch.isupper() and not (ks >> (ord(ch) - ord('A')) & 1): continue
        nks = ks | (1 << (ord(ch) - ord('a'))) if ch.islower() else ks
        s = (nx, ny, nks)
        if s not in prev:
          prev[s] = (x, y, ks)
          q.append(s)
  return None