def count_digits(num, rounds):
    res = [num]
    for r in range(0, rounds):  
        s = "".join([str(n) for n in res])
        counts = {}
        for d in s:
            counts[d] = counts.get(d, 0) + 1
        res = [c * 10 + int(d) for d, c in counts.items()]
    return res