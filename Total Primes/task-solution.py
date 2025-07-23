from itertools import product
from math import isqrt
from bisect import bisect_left
S=[n for l in range(1,8) for n in map(int,map(''.join,product('2357',repeat=l))) if n>1 and all(n%i for i in range(2,isqrt(n)+1))]
def get_total_primes(a,b):return bisect_left(S,b)-bisect_left(S,a)