def reverse_in_parentheses(s):
    stack = [""]
    swap = str.maketrans("()", ")(")
    for c in s:
        if c == "(":
            stack.append("")
        elif c == ")":
            top = stack.pop()[::-1].translate(swap)
            stack[-1] += f"({top})"
        else:
            stack[-1] += c
    return stack[0]