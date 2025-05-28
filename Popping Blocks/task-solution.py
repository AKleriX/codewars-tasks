def pop_blocks(lst):
    result = list(lst)
    while True:
        i = 0
        n = len(result)
        popped = False
        while i < n:
            j = i + 1
            while j < n and result[j] == result[i]:
                j += 1
            if j - i >= 2:
                result = result[:i] + result[j:]
                popped = True
                break
            i = j
        if not popped:
            break
    return result