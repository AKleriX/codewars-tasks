def delete_nth(order, max_e):
    counter = {}
    result = []
    for i in order:
        counter[i] = counter.get(i, 0) + 1
        if counter[i] <= max_e:
            result.append(i)
    return result