def my_very_own_split(string, delimiter=None):
    if delimiter == '':
        raise ValueError('empty separator')
    if delimiter is None:
        n = len(string)
        i = 0
        while i < n:
            while i < n and string[i].isspace():
                i += 1
            if i >= n:
                break
            j = i
            while j < n and not string[j].isspace():
                j += 1
            yield string[i:j]
            i = j
    else:
        start = 0
        step = len(delimiter)
        while True:
            idx = string.find(delimiter, start)
            if idx == -1:
                yield string[start:]
                break
            yield string[start:idx]
            start = idx + step