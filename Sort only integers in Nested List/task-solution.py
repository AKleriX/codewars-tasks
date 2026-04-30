def sort_nested_list(lst):
    vals = iter(sorted(x for a in lst for b in a for x in b))
    return [[[next(vals) for _ in b] for b in a] for a in lst]