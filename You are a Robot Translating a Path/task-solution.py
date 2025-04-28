def walk(path):
    if not path:
        return "Paused"
    dir_map = {'^': 'up', 'v': 'down', '>': 'right', '<': 'left'}
    instructions = []
    count = 1
    prev = path[0]
    for ch in path[1:]:
        if ch == prev:
            count += 1
        else:
            word = "step" if count == 1 else "steps"
            instructions.append(f"Take {count} {word} {dir_map[prev]}")
            prev = ch
            count = 1
    word = "step" if count == 1 else "steps"
    instructions.append(f"Take {count} {word} {dir_map[prev]}")
    return "\n".join(instructions)