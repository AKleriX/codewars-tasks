def arrow_search(s: str) -> int:
    a = i = 0
    while i < len(s):
        if s[i] == '<':                          # left-facing
            j = i + 1
            t = s[j] if j < len(s) and s[j] in '-=' else ''
            while t and j < len(s) and s[j] == t:
                j += 1
            if t and j < len(s) and s[j] == '>':   # double-sided
                i = j
                continue
            a -= (j - i if t else 1) * (2 if t == '=' else 1)
            i = j
        elif s[i] == '>':                        # right-facing
            j = i - 1
            t = s[j] if j >= 0 and s[j] in '-=' else ''
            while t and j >= 0 and s[j] == t:
                j -= 1
            l = i - j - 1 if t else 0
            if l and j >= 0 and s[j] == '<':       # double-sided
                i += 1
                continue
            a += (l + 1) * (2 if t == '=' else 1)
            i += 1
        else:
            i += 1
    return a