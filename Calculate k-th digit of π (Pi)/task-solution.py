import math

def _pi_gen():
    k, a, b, a1, b1 = 2, 4, 1, 12, 4
    while True:
        p, q, k = k * k, 2 * k + 1, k + 1
        a, b, a1, b1 = a1, b1, p * a + q * a1, p * b + q * b1
        d, d1 = a // b, a1 // b1
        while d == d1:
            yield d
            a, a1 = 10 * (a % b), 10 * (a1 % b1)
            d, d1 = a // b, a1 // b1

_digits = []
_gen = _pi_gen()

def pi(k):
    while len(_digits) <= k:
        _digits.append(next(_gen))
    return _digits[k]