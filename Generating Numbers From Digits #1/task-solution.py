from math import factorial as f, prod
from collections import Counter
def proc_arr(arr):
    s = ''.join(sorted(arr))
    return [f(len(arr)) // prod(f(v) for v in Counter(arr).values()),
            int(s.lstrip('0') or '0'),
            int(s[::-1])]