def covered_pawns(pawns):
    pawns = {p.lower() for p in pawns}
    return sum(any(chr(ord(p[0]) + d) + str(int(p[1]) - 1) in pawns for d in (-1, 1)) for p in pawns)