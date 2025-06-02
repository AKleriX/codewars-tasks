import math

def sum_arrangements(num):
    s = str(num)
    n = len(s)
    sd = 0
    for c in s:
        sd += ord(c) - 48
    f = math.factorial(n - 1)
    repunit = (10**n - 1) // 9
    return sd * f * repunit