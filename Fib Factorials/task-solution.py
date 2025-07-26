from math import factorial as f
def sum_fib(n, a=0, b=1): return f(a) + sum_fib(n-1, b, a+b) if n else 0