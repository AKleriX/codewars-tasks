from preloaded import dictionary

def check(board: str) -> bool:
    grid = [list(board[i:i+15]) for i in range(0, 225, 15)]
    tiles = [(i, j) for i in range(15) for j in range(15) if grid[i][j] != ' ']
    
    if not tiles:
        return True
    
    if len(tiles) == 1 or grid[7][7] == ' ':
        return False
    
    visited = {tiles[0]}
    stack = [tiles[0]]
    
    while stack:
        i, j = stack.pop()
        for di, dj in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < 15 and 0 <= nj < 15 and grid[ni][nj] != ' ' and (ni, nj) not in visited:
                visited.add((ni, nj))
                stack.append((ni, nj))
    
    if len(visited) != len(tiles):
        return False
    
    words = set()
    dict_set = set(dictionary)
    
    for direction in [grid, list(zip(*grid))]:
        for line in direction:
            word = []
            for char in line:
                if char != ' ':
                    word.append(char)
                else:
                    if len(word) >= 2:
                        words.add(''.join(word))
                    word = []
            if len(word) >= 2:
                words.add(''.join(word))
    
    return all(w in dict_set for w in words)