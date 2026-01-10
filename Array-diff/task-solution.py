def array_diff(a, b):
    set_b = set(b)
    return [el for el in a if el not in b]