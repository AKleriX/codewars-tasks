from preloaded import count_calls
from functools import wraps

def memoize(func):
    cache = {}
    @wraps(func)
    def wrapper(x):
        if x not in cache:
            cache[x] = func(x)
        return cache[x]
    return wrapper