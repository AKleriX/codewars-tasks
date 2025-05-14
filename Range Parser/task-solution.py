def range_parser(s):
    import re
    tokens = re.split(r',\s*', s)
    result = []

    for token in tokens:
        if '-' in token and ':' in token:
            start_end, step = token.split(':')
            start, end = map(int, start_end.split('-'))
            step = int(step)
            result.extend(range(start, end + 1, step))
        elif '-' in token:
            start, end = map(int, token.split('-'))
            result.extend(range(start, end + 1))
        else:
            result.append(int(token))

    return result