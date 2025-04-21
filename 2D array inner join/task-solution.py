def inner_join(arrA, arrB, indA, indB):
    result = []

    for rowA in arrA:
        valA = rowA[indA]
        if valA is None:
            continue

        for rowB in arrB:
            valB = rowB[indB]
            if valB is None:
                continue

            if valA == valB:
                result.append(rowA + rowB)

    return result