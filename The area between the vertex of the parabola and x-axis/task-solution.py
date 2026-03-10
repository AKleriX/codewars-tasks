from math import sqrt

def area(a, b, c):
    d = b * b - 4 * a * c
    if d <= 0:
        return 0
    s = sqrt(d)
    x1 = (-b - s) / (2 * a)
    x2 = (-b + s) / (2 * a)
    if x1 > x2:
        x1, x2 = x2, x1
    return abs(a * (x2 ** 3 - x1 ** 3) / 3 + b * (x2 ** 2 - x1 ** 2) / 2 + c * (x2 - x1))