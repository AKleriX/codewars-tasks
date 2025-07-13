def sort_ranks(ranks):
    return sorted(ranks, key=lambda s: [int(x) for x in s.split('.')])