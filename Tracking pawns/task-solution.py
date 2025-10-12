def pawn_move_tracker(moves):
    board = [
        [".",".",".",".",".",".",".","."],
        ["p","p","p","p","p","p","p","p"],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        [".",".",".",".",".",".",".","."],
        ["P","P","P","P","P","P","P","P"],
        [".",".",".",".",".",".",".","."]
    ]
    for i, m in enumerate(moves):
        w = i % 2 == 0
        P, E, d = ('P','p',-1) if w else ('p','P',1)
        c = ord(m[-2]) - 97
        r = 8 - int(m[-1])
        if 'x' in m:
            sc = ord(m[0]) - 97
            sr = r - d
            if not (0 <= sr < 8 and abs(sc - c) == 1 and board[sr][sc] == P and board[r][c] == E):
                return f"{m} is invalid"
            board[sr][sc] = "."
            board[r][c] = P
        else:
            if board[r][c] != ".": 
                return f"{m} is invalid"
            sr1 = r - d
            if 0 <= sr1 < 8 and board[sr1][c] == P:
                board[sr1][c] = "."
                board[r][c] = P
            else:
                sr2 = r - 2*d
                start = 6 if w else 1
                if 0 <= sr2 < 8 and sr2 == start and board[sr2][c] == P and board[sr1][c] == ".":
                    board[sr2][c] = "."
                    board[r][c] = P
                else:
                    return f"{m} is invalid"
    return board