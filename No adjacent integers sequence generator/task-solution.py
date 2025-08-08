def generate_sequence(lower, upper):
    a, b=list(range(lower + (lower & 1), upper, 2)), list(range(lower + ((lower + 1) & 1), upper, 2))
    return (a + b, b + a)[bool(a) and bool(b) and abs(a[-1] - b[0]) == 1]