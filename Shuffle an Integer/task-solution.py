import math
import random

def shuffint(n: int) -> int:
    k = n.bit_length()          
    ones = n.bit_count()       


    total = math.comb(k, ones)
    
    if total <= 1:
        return 0

    while True:
        positions = random.sample(range(k), ones)
        m = 0
        for p in positions:
            m |= (1 << p)
        if m != n:     
            return m