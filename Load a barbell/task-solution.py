def load_barbell(w):
    p= w - 25
    a = b = ''
    for v, c in zip((50,40,30,20,10,5,4,3,2,1), 'RBYGWrbygw'):
        q, p = divmod(p,v)
        if v > 4: a += c * q
        else :b += c * q
    s = a + 'c' + b
    return s[::-1].rjust(10, '-') + '-' * 20 + s.ljust(10, '-')