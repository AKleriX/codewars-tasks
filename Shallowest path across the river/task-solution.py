from heapq import heappush, heappop, heapify

def shallowest_path(river):
    rows, cols = len(river), len(river[0])
    
    tracker = {(r, 0): (0, None) for r in range(rows)}
    pq = [(river[r][0], 0, (r, 0)) for r in range(rows)]
    heapify(pq)
    
    while pq:
        depth, steps, (r, c) = heappop(pq)
        
        if c == cols - 1:
            path, current = [], (r, c)
            while current:
                path.append(current)
                _, current = tracker[current]
            return path[::-1]
        
        for dr, dc in [(0,1), (1,1), (-1,1), (0,-1), (1,-1), (-1,-1), (1,0), (-1,0)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols:
                new_steps = steps + 1
                if tracker.get((nr, nc), (float('inf'), 0))[0] > new_steps:
                    tracker[(nr, nc)] = (new_steps, (r, c))
                    heappush(pq, (max(depth, river[nr][nc]), new_steps, (nr, nc)))
    
    return []