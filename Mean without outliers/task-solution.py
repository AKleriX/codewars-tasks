def clean_mean(sample, cutoff):
    a = sample[:]
    while a:
        m = sum(a) / len(a)
        s = (sum((x - m) ** 2 for x in a) / len(a)) ** 0.5
        b = [x for x in a if s == 0 or abs(x - m) <= cutoff * s]
        if b == a:
            break
        a = b
    return round(sum(a) / len(a), 2) if a else 0.0