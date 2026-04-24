def fixed_xor(a, b):
    n = min(len(a), len(b))
    return "" if n == 0 else f"{int(a[:n], 16) ^ int(b[:n], 16):0{n}x}"