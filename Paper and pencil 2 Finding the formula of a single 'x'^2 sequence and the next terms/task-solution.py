def quadratic_formula(y1, y2, y3):
    b = y2 - y1 - 3
    c = y1 - b - 1

    f = "x^2"
    if b:
        f += ("+" if b > 0 else "-") + ("" if abs(b) == 1 else str(abs(b))) + "x"
    if c:
        f += ("+" if c > 0 else "-") + str(abs(c))

    return f, 16 + 4 * b + c, 25 + 5 * b + c