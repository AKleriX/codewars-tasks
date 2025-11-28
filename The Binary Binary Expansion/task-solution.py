def true_binary(n):
    b = bin(n)[2:]
    return [1 if c == '1' else -1 for c in b[-1] + b[:-1]]