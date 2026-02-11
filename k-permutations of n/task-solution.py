def k_permutations_of_n(lst : list, k : int) -> list:
    if k > len(lst):
        return []
    if k == 0:
        return [[]]    
    res = []
    for i, x in enumerate(lst):
        rest = lst[:i] + lst[i+1:]
        for tail in k_permutations_of_n(rest, k - 1):
            res.append([x] + tail)
    return res