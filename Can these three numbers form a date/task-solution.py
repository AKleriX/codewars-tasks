from itertools import permutations

def unique_date(x, y, z):
    r = set()
    for y, m, d in set(permutations((x, y, z))):
        if 1 <= m <= 12:
            md = [31, 28 + (y % 4 == 0 and (y != 0 or y % 100 == 0)), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            if 1 <= d <= md[m - 1]:
                r.add(f'{y:02}/{m:02}/{d:02}')
    return 'invalid' if not r else 'ambiguous' if len(r) > 1 else r.pop()