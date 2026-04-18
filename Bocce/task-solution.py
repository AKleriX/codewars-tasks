def bocce_score(balls):
    jx, jy = balls[-1]['distance']
    d = {c: sorted((x - jx) ** 2 + (y - jy) ** 2
                   for b in balls[:-1] if b['type'] == c
                   for x, y in [b['distance']])
         for c in ('red', 'black')}
    r, b = d['red'], d['black']
    if not r or not b or r[0] == b[0]:
        return 'No points scored'
    c, w, l = ('red', r, b) if r[0] < b[0] else ('black', b, r)
    return f'{c} scores {sum(x < l[0] for x in w)}'