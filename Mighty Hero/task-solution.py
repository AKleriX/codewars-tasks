def count_of_heads(initial, n, swings):
    heads = initial
    for i in range(1, swings + 1):
        new_heads = n
        for j in range(2, i + 1):
            new_heads *= j
        heads = heads - 1 + new_heads
    return heads