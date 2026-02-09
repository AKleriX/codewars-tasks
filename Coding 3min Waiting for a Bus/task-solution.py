def sc(time, km):
    h, m = map(int, time.split(':'))
    t = h * 60 + m
    travel = 2 * km

    first, last, step = 360, 1200, 15
    x = t - travel

    if x <= first:
        d = first
    elif x > last:
        d = first + 1440
    else:
        d = first + ((x - first + step - 1) // step) * step
        if d > last:
            d = first + 1440

    a = (d + travel) % 1440
    return f'{a//60:02d}:{a%60:02d}'