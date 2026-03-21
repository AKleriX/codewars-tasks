from itertools import combinations
from math import comb, prod

def eval_prod_sum(arr, num_fact, num_add, max_val):
    if type(arr) != list or any(type(x) != int or x == 0 for x in arr) or any(type(x) != int or x < 1 for x in (num_fact, num_add, max_val)):
        return "Error. Unexpected entries"
    if num_fact > len(arr):
        return "Error. Number of factors too high"
    if num_add > comb(len(arr), num_fact):
        return "Error. Number of addens too high"
    p = [prod(c) for c in combinations(arr, num_fact)]
    b = e = h = 0
    for s in map(sum, combinations(p, num_add)):
        if s < max_val:
            b += 1
        elif s == max_val:
            e += 1
        else:
            h += 1
    return [{f"Below than {max_val}": b}, {f"Equals to {max_val}": e}, {f"Higher than {max_val}": h}]