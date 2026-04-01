def format_playlist(songs):
    songs = sorted(songs, key=lambda s: (s[2], s[0]))
    w1 = max([4] + [len(s[0]) for s in songs])
    w2 = 4
    w3 = max([6] + [len(s[2]) for s in songs])
    b = f"+-{'-'*w1}-+-{'-'*w2}-+-{'-'*w3}-+"
    rows = [b, f"| {'Name':<{w1}} | {'Time':<{w2}} | {'Artist':<{w3}} |", b]
    rows += [f"| {n:<{w1}} | {t:<{w2}} | {a:<{w3}} |" for n, t, a in songs]
    if songs:
        rows.append(b)
    return "\n".join(rows)