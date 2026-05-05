def sel_quot(arr, m, dir_str=None):
    res = {
        (a // b, (a, b))
        for a in arr
        for b in arr
        if a % b == 0 and a // b >= m
    }

    if dir_str:
        parity = dir_str.lower() == "odd"
        res = {x for x in res if x[0] % 2 == parity}

    return sorted(res)