from bisect import bisect_left

_fibs = [1, 2]

def nearest_fibonacci(number):
    while _fibs[-1] < number:
        _fibs.append(_fibs[-1] + _fibs[-2])
    i = bisect_left(_fibs, number)
    if _fibs[i] == number:
        return number
    if i == 0:
        return _fibs[0]
    lo, hi = _fibs[i - 1], _fibs[i]
    return lo if number - lo <= hi - number else hi