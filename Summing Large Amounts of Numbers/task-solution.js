def sum_them(n):
    return 0 if n == 0 else (1 << (2*n - 1)) - (1 << (n - 1))