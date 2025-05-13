import time

def timer(limit):
    def decorator(func):
        def wrapper(*args, **kwargs):
            start = time.time()
            func(*args, **kwargs)
            end = time.time()
            return (end - start) < limit
        return wrapper
    return decorator