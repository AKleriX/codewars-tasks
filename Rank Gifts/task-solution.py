def rank_gifts(gift_rank, *gifts):
    weights = {g: 1 << i for i, g in enumerate(gift_rank)}
    scored = [(sum(weights.get(x, 0) for x in t[:-1]), i, t[-1]) for i, t in enumerate(gifts)]
    return [name for _, _, name in sorted(scored)]