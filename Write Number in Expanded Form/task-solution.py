def expanded_form(num):
    s = str(num)
    parts = []
    for i, d in enumerate(s):
        if d != '0':
            parts.append(d + '0' * (len(s) - i - 1))
    return " + ".join(parts)