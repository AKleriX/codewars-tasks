from functools import wraps

def validate_args(*types):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for arg, expected in zip(args, types):
                if not isinstance(arg, expected):
                    raise InvalidArgument
            return func(*args, **kwargs)
        return wrapper
    return decorator