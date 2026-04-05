def find_the_crossing(a, b, c, d):
    (x1, y1), (x2, y2), (x3, y3), (x4, y4) = a, b, c, d
    den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
    if not den:
        return None
    d1 = x1 * y2 - y1 * x2
    d2 = x3 * y4 - y3 * x4
    return (
        (d1 * (x3 - x4) - (x1 - x2) * d2) / den,
        (d1 * (y3 - y4) - (y1 - y2) * d2) / den
    )