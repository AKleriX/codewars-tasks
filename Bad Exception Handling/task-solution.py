def handle(func, success, failure, *exceptions):
    class Handler:
        def __enter__(self):
            pass
        
        def __exit__(self, exc_type, exc_val, exc_tb):
            if exc_type and any(isinstance(exc_val, e) for e in exceptions):
                failure(func, exc_val)
                return True
    
    with Handler():
        success(func, func())