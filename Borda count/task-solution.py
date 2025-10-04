def borda_count(table):
    prefs = list(table.values())
    S = set().union(*prefs)
    while True:
        k = len(S)
        scores = {c: 0 for c in S}
        for pref in prefs:
            r = [c for c in pref if c in S]
            for i, c in enumerate(r):
                scores[c] += k - 1 - i
        vals = list(scores.values())
        if len(S) == 1 or len(set(vals)) == 1:
            return set(S)
        m = sum(vals) / len(S)
        S = {c for c in S if scores[c] >= m}