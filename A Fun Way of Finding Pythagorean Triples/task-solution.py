def create_pythagorean_triples(diff, low, high):
    triples = []
    for a in range(low, high + 1):
        a2 = a * a
        if a2 % diff != 0:
            continue
        cb_sum = a2 // diff
        if (cb_sum - diff) % 2 != 0:
            continue
        b = (cb_sum - diff) // 2
        c = b + diff
        if a < b < c and a * a + b * b == c * c:
            triples.append((a, b, c))
    return triples