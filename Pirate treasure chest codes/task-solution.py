from math import gcd
from functools import reduce
import re

def treasure_code(clue):
    p = re.findall(r'([A-Z])(\d+)', clue)
    g = reduce(gcd, (int(n) for _, n in p))
    return ''.join(f'{c}{int(n)//g}' for c, n in p)