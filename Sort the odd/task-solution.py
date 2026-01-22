def sort_array(source_array):
    sorted_odds = iter(sorted([n for n in source_array if n % 2 == 1]))
    return [next(sorted_odds) if n % 2 == 1 else n for n in source_array]