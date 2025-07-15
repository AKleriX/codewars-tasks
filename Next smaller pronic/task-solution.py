import math
def next_smaller_pronic(n):
    k=(math.isqrt(4*n-3)-1)>>1
    return k*(k+1)