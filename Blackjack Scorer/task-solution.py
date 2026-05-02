def score_hand(cards):
    score = sum(11 if c == "A" else 10 if c in "JQK" else int(c) for c in cards)
    aces = cards.count("A")

    while score > 21 and aces:
        score -= 10
        aces -= 1

    return score