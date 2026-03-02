def sc(room):
    n = len(room)
    items = [c for row in room for c in row if c != " "]
    m = len(items)
    k = 0 if m == 0 else int((m - 1) ** 0.5) + 1   
    
    out = [[" "] * n for _ in range(n)]
    
    for i, c in enumerate(items):
        out[i // k][i % k] = c
        
    return out