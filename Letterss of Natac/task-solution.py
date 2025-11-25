from collections import Counter

def play_if_enough(hand, play):
    hand_counts = Counter(hand)
    play_counts = Counter(play)
    if any(hand_counts[c] < n for c, n in play_counts.items()):
        return False, hand
    remaining = []
    for ch in hand:
        if play_counts[ch]:
            play_counts[ch] -= 1
        else:
            remaining.append(ch)
    return True, ''.join(remaining)