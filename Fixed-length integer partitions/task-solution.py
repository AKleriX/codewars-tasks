def indices(n, d):
    return [[d]] if n == 1 else [[i] + rest for i in range(d + 1) for rest in indices(n - 1, d - i)]