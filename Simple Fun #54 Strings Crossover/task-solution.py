def strings_crossover(arr, result):
    return sum(
        all(result[k] in (a[k], b[k]) for k in range(len(result)))
        for i, a in enumerate(arr)
        for b in arr[i + 1:]
    )