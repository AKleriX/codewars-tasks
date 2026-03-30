def score_match(game: tuple[tuple, tuple]) -> dict[str, object]:
    def v(x): return 0 if x in (None, 'F') else x

    def score(g):
        rolls = []
        for i, f in enumerate(g):
            if i < 9:
                rolls += [10] if f[0] == 10 else [v(f[0]), v(f[1])]
            else:
                rolls += [v(x) for x in f if x is not None]
        s = []
        j = 0
        for i, f in enumerate(g):
            if i == 9:
                s.append(sum(v(x) for x in f if x is not None))
            elif f[0] == 10:
                s.append(10 + rolls[j + 1] + rolls[j + 2])
                j += 1
            else:
                a, b = v(f[0]), v(f[1])
                s.append(a + b + (rolls[j + 2] if a + b == 10 else 0))
                j += 2
        return sum(s), sum(v(x) for fr in g for x in fr if x is not None)

    fs = [[score(g) for g in p] for p in game]
    frames = [[x[0] for x in p] for p in fs]
    pins = [sum(x[1] for x in p) for p in fs]
    points = [[], []]

    for a, b in zip(*frames):
        if a > b:
            points[0].append(2)
            points[1].append(0)
        elif b > a:
            points[0].append(0)
            points[1].append(2)
        else:
            points[0].append(1)
            points[1].append(1)

    points[0].append(pins[0] > pins[1])
    points[1].append(pins[1] > pins[0])

    t1, t2 = map(sum, points)
    return {
        'player 1': {'frames': frames[0], 'points': points[0]},
        'player 2': {'frames': frames[1], 'points': points[1]},
        'result': 'Player 1 won!' if t1 > t2 else 'Player 2 won!' if t2 > t1 else 'The match is a draw!'
    }