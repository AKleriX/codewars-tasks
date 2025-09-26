from itertools import accumulate

def min_num_taxis(requests):
    d = {}
    for s, e in requests:
        d[s] = d.get(s, 0) + 1
        d[e + 1] = d.get(e + 1, 0) - 1
    return max(accumulate(v for _, v in sorted(d.items())))