def max_zero_sequence(arr):
    s = best = start = 0
    seen = {0: -1}

    for i, x in enumerate(arr):
        s += x
        if s in seen:
            n = i - seen[s]
            if n > best:
                best, start = n, seen[s] + 1
        else:
            seen[s] = i

    return arr[start:start + best]