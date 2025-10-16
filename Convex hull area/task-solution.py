def convex_hull_area(points):
    P = sorted(set(points))
    if len(P) < 3: 
        return 0.0
    def cross(o,a,b): 
        return (a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0])
    lower = []
    for p in P:
        while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
            lower.pop()
        lower.append(p)
    upper = []
    for p in reversed(P):
        while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
            upper.pop()
        upper.append(p)
    h = lower[:-1] + upper[:-1]
    return round(abs(sum(x*y2 - x2*y for (x,y),(x2,y2) in zip(h, h[1:]+h[:1])))/2, 2)