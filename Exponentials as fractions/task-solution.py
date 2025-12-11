from fractions import Fraction
from decimal import Decimal

def expand(x, digit):
    x = Fraction(Decimal(str(x)))
    total = term = Fraction(1)
    n = 0
    while len(str(total.numerator)) < digit:
        n += 1
        term *= x
        term /= n
        total += term
    return [total.numerator, total.denominator]