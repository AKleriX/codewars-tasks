def fill(arr, method=0):
    def sweep(values):
        out = []
        last = None
        for value in values:
            if value is not None:
                last = value
            out.append(last)
        return out

    def seen_left(values):
        out = []
        last = None
        for i, value in enumerate(values):
            if value is not None:
                last = (i, value)
            out.append(last)
        return out

    if method == 1:
        return sweep(arr)

    if method == -1:
        return sweep(arr[::-1])[::-1]

    left = seen_left(arr)
    right = seen_left(arr[::-1])[::-1]
    right = [None if x is None else (len(arr) - 1 - x[0], x[1]) for x in right]

    return [
        value if value is not None else min(
            [x for x in (left[i], right[i]) if x is not None],
            key=lambda x: (abs(i - x[0]), x[1]),
            default=(0, None)
        )[1]
        for i, value in enumerate(arr)
    ]