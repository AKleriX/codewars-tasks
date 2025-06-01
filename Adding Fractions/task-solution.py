from fractions import Fraction

def add_fracs(*fracs):
    if not fracs:
        return ""
    total = sum((Fraction(int(n), int(d)) for n, d in (f.split("/") for f in fracs)), Fraction(0, 1))
    if total.denominator == 1:
        return str(total.numerator)
    return f"{total.numerator}/{total.denominator}"