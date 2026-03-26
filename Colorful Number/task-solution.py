def colorful(number):
    s = str(number)
    seen = set()
    for i in range(len(s)):
        p = 1
        for d in s[i:]:
            p *= int(d)
            if p in seen:
                return False
            seen.add(p)
    return True