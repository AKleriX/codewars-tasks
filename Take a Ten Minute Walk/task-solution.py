def is_valid_walk(walk):
    return len(walk) == 10 and is_the_same(walk)

def is_the_same(walk):
    counter = [0, 0]
    for d in walk:
        match d:
            case "n":
                counter[0] += 1
            case "s":
                counter[0] -= 1
            case "w":
                counter[1] += 1
            case "e":
                counter[1] -= 1
    return counter[0] == 0 and counter[1] == 0