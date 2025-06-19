def series_slices(digits, n):
    if n <= 0 or n > len(digits):
        raise ValueError("slice length is invalid")
    return [[int(digits[i + j]) for j in range(n)] for i in range(len(digits) - n + 1)]