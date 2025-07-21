from math import comb
def nth_catalan_number(n):
    return comb(2*n, n)//(n+1)