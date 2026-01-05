from math import gcd
from functools import reduce

def survivor(zombies):
    if not zombies:
        return -1
    if 1 in zombies:
        return 0
    if reduce(gcd, zombies) > 1:
        return -1
    
    min_z = min(zombies)
    limit = min_z * max(zombies)
    can_make = {0}
    
    for i in range(1, limit + 1):
        if any(i - z in can_make for z in zombies if i >= z):
            can_make.add(i)
    
    for i in range(limit, -1, -1):
        if i not in can_make:
            return i
    return 0