def operation_arguments(arr):
    out = []
    for x in arr:
        if callable(x):
            out[-1:] = [x(out[-1] if out else 0)]
        else:
            out.append(x)
    return out