def encode(inp):
    if not inp:
        return ""
    result = []
    count = 1
    for i in range(1, len(inp)):
        if inp[i] == inp[i - 1]:
            count += 1
        else:
            result.append(f"{inp[i - 1]}{count}")
            count = 1
    result.append(f"{inp[-1]}{count}")
    return ''.join(result)