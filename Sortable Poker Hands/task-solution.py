from collections import Counter

class PokerHand(object):
    def __repr__(self): return self.hand

    def __init__(self, hand):
        self.hand = hand
        v = "--23456789TJQKA"
        cards = hand.split()
        vals = [v.index(x[0]) for x in cards]
        suits = [x[1] for x in cards]
        c = Counter(vals)
        counts = sorted(((n, x) for x, n in c.items()), reverse=True)
        flush = len(set(suits)) == 1
        sv = sorted(vals, reverse=True)
        straight = len(c) == 5 and (max(vals) - min(vals) == 4 or sv == [14, 5, 4, 3, 2])
        shigh = 5 if sv == [14, 5, 4, 3, 2] else max(vals)
        if straight and flush: key = (8, shigh)
        elif counts[0][0] == 4: key = (7, counts[0][1], counts[1][1])
        elif counts[0][0] == 3 and counts[1][0] == 2: key = (6, counts[0][1], counts[1][1])
        elif flush: key = (5,)+tuple(sv)
        elif straight: key = (4, shigh)
        elif counts[0][0] == 3: key = (3, counts[0][1], counts[1][1], counts[2][1])
        elif counts[0][0] == 2 and counts[1][0] == 2: key = (2, counts[0][1], counts[1][1], counts[2][1])
        elif counts[0][0] == 2: key = (1, counts[0][1], counts[1][1], counts[2][1], counts[3][1])
        else: key = (0,)+tuple(sv)
        self.key = key

    def __lt__(self, other): return self.key > other.key
    def __eq__(self, other): return self.key == other.key