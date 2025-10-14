def ulam_sequence(u0, u1, n):
    """
    u0 = first number
    u1 = second numberr
    n  = final number of elements in the sequence
    """
    a = [u0, u1]
    c = {u0 + u1: 1}
    while len(a) < n:
        x = a[-1] + 1
        while c.get(x, 0) != 1:
            x += 1
        for y in a:
            c[y + x] = c.get(y + x, 0) + 1
        a.append(x)
    return a[:n]