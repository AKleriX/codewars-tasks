from preloaded import FIELD

def is_efficient(x, y, threshold):
    return sum(
        float(FIELD[i][j])
        for i in range(max(0, x - 1), min(20, x + 2))
        for j in range(max(0, y - 1), min(20, y + 2))
    ) >= threshold