import json

def jsonattr(filepath):
    def decorator(cls):
        with open(filepath) as f:
            data = json.load(f)
        for k, v in data.items():
            setattr(cls, k, v)
        return cls
    return decorator