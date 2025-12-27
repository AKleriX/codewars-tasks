from preloaded import WORDS

def squaredle(puzzle):
    grid = [list(row) for row in puzzle.split('-')]
    h, w = len(grid), len(grid[0])
    
    trie = {}
    for word in WORDS:
        node = trie
        for char in word:
            node = node.setdefault(char, {})
        node['*'] = word
    
    found = set()
    
    def dfs(r, c, node, visited):
        if not (0 <= r < h and 0 <= c < w) or (r, c) in visited or grid[r][c] == ' ':
            return
        if grid[r][c] not in node:
            return
        
        node = node[grid[r][c]]
        if '*' in node:
            found.add(node['*'])
        
        visited.add((r, c))
        for dr in [-1, 0, 1]:
            for dc in [-1, 0, 1]:
                if dr or dc:
                    dfs(r + dr, c + dc, node, visited)
        visited.remove((r, c))
    
    for r in range(h):
        for c in range(w):
            dfs(r, c, trie, set())
    
    return sorted(found, key=lambda x: (len(x), x))