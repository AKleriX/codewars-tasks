def sum_mult_triangnum(n, m):
    import math, functools; return functools.reduce(math.lcm, (k*(k+1)//2 for k in range(1, n+1))) * m*(m+1)//2