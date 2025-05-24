def directions(goal):
    from collections import Counter

    count = Counter(goal)
    n = count["N"] - count["S"]
    e = count["E"] - count["W"]

    result = []
    if n > 0:
        result += ["N"] * n
    elif n < 0:
        result += ["S"] * -n

    if e > 0:
        result += ["E"] * e
    elif e < 0:
        result += ["W"] * -e

    return result