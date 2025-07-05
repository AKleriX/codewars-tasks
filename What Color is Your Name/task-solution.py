def string_color(name):
    if len(name) < 2:
        return
    t, p = 0, 1
    for c in name:
        v = ord(c)
        t += v
        p = p * v % 256
    return f'{t%256:02X}{p:02X}{abs(ord(name[0])*2-t)%256:02X}'