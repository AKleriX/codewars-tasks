def battle_codes(a, b):
    if not a or not b: return 'Peace'
    a = [ord(c) - 96 for c in a]
    b = [int(c) for c in b]
    i = 0
    while a and i < len(b):
        x, y = a[-1], b[i]
        b[i] -= x
        if len(a) == 1:
            a = [x - y] if x > y else []
        else:
            u, v = a[-2] - y, x - y
            a[-2:] = ([u] if u > 0 else []) + ([v] if v > 0 else [])
        if b[i] < 1:
            i += 1
    return ''.join(map(chr, (x + 96 for x in a))) if a else ''.join(map(str, b[i:])) if i < len(b) else 'Draw'