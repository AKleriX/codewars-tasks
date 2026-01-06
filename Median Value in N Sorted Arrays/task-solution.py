from bisect import bisect_right

def median_from_n_arrays(arrays):
    arrays = [a for a in arrays if a]
    n = sum(len(a) for a in arrays)
    lo = min(a[0] for a in arrays)
    hi = max(a[-1] for a in arrays)

    def kth(k):
        l, h = lo, hi
        while l < h:
            m = (l + h) // 2
            if sum(bisect_right(a, m) for a in arrays) > k:
                h = m
            else:
                l = m + 1
        return l

    return (kth((n - 1) // 2) + kth(n // 2)) / 2