def champion_rank(pilot: int, events: str) -> int:
    order = list(range(1, 21))
    tokens = events.split()
    for id_str, typ in zip(tokens[::2], tokens[1::2]):
        pid = int(id_str)
        if typ == 'O':
            i = order.index(pid)
            order[i - 1], order[i] = order[i], order[i - 1]
        else:
            if pid == pilot:
                return -1
            order.remove(pid)
    return order.index(pilot) + 1 if pilot in order else -1