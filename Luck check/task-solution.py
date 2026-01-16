import re
import math

def luck_check(st):
    if re.match(r"^[0-9]+$", st):
        return sum(st[:len(st) // 2]) == sum(st[math.ceil(len(st) / 2):])
    raise ValueError("Invalid type value")

def sum(str):
    s = 0
    for d in str:
        s += int(d)
    return s