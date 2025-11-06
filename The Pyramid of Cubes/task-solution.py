def find_height(cubes):
    if cubes <= 0:
        return 0
    lo, hi = 0, int((6 * cubes) ** (1 / 3)) + 3
    while lo < hi:
        mid = (lo + hi + 1) // 2
        total = mid * (mid + 1) * (mid + 2) // 6
        if total <= cubes:
            lo = mid
        else:
            hi = mid - 1
    return lo