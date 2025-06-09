def decipher_message(message):
    n = int(len(message) ** 0.5)
    grid = [['' for _ in range(n)] for _ in range(n)]
    
    idx = 0
    for col in range(n):
        for row in range(n):
            grid[row][col] = message[idx]
            idx += 1
    
    result = ''
    for row in range(n):
        for col in range(n):
            result += grid[row][col]
    
    return result