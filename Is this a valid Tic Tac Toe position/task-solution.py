def is_valid_position(board: tuple[tuple[str, ...], ...]) -> bool:
    s = [c for row in board for c in row]
    lines = [(0, 1, 2),
             (3, 4, 5),
             (6, 7, 8),
             (0, 3, 6),
             (1, 4, 7),
             (2, 5, 8),
             (0, 4, 8),
             (2, 4, 6)]

    def win(p, b):
        return any(all(b[i] == p for i in ln) for ln in lines)

    x, o = s.count('X'), s.count('O')
    if not (o <= x <= o + 1):
        return False

    wx, wo = win('X', s), win('O', s)
    if wx and wo:
        return False

    if wx:
        if x != o + 1:
            return False
        return any(
            not win('X', t) and not win('O', t)
            for i, c in enumerate(s) if c == 'X'
            for t in [s[:i] + ['_'] + s[i+1:]]
        )

    if wo:
        if x != o:
            return False
        return any(
            not win('X', t) and not win('O', t)
            for i, c in enumerate(s) if c == 'O'
            for t in [s[:i] + ['_'] + s[i+1:]]
        )

    return True