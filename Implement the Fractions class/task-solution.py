import math

class Fraction:
    def __init__(self, numerator, denominator):
        if denominator == 0:
            raise ValueError("Denominator cannot be zero")
        if denominator < 0:
            numerator = -numerator
            denominator = -denominator
        g = math.gcd(numerator, denominator)
        self.top = numerator // g
        self.bottom = denominator // g

    def __eq__(self, other):
        if not isinstance(other, Fraction):
            return NotImplemented
        return self.top == other.top and self.bottom == other.bottom

    def __str__(self):
        return f"{self.top}/{self.bottom}"

    def __repr__(self):
        return f"Fraction({self.top}, {self.bottom})"

    def __add__(self, other):
        if not isinstance(other, Fraction):
            return NotImplemented
        num = self.top * other.bottom + other.top * self.bottom
        den = self.bottom * other.bottom
        return Fraction(num, den)