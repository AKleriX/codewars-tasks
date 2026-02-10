from math import gcd

def time_at_sync(firstOffset, secondOffset):
    d = abs(firstOffset - secondOffset)
    n = 1440 // gcd(1440, d)
    min = (n * (60 + firstOffset)) % 1440
    h = min // 60
    m = min % 60
    return f"{h:02d}:{m:02d}"