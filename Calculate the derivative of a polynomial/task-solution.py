def derivative(eq):
    out = []
    for t in eq.replace('-', '+-').split('+'):
        if not t or 'x' not in t:
            continue
        a, b = t.split('x')
        c = -1 if a == '-' else 1 if a in ('', '+') else int(a)
        p = int(b[1:]) if b.startswith('^') else 1
        c *= p
        p -= 1
        s = '-' if c < 0 else '+'
        c = abs(c)
        term = str(c) if p == 0 else ('' if c == 1 else str(c)) + 'x' + ('' if p == 1 else '^' + str(p))
        out.append((s, term))
    return '0' if not out else ''.join((s if i or s == '-' else '') + t for i, (s, t) in enumerate(out))