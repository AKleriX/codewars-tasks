def bracket_pairs(strng):
    stack = []
    pairs = {}

    for i, char in enumerate(strng):
        if char == '(':
            stack.append(i)
        elif char == ')':
            if not stack:
                return False
            open_pos = stack.pop()
            pairs[open_pos] = i

    return pairs if not stack else False