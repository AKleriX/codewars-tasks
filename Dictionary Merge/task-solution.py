def merge(*dicts):
    result = {}
    for d in dicts:
        for key, value in d.items():
            if key in result:
                result[key].append(value)
            else:
                result[key] = [value]
    return result