def largest_rect(histogram):
    stack = []
    best = 0
    for i, h in enumerate(histogram + [0]):
        start = i
        while stack and stack[-1][1] > h:
            j, height = stack.pop()
            best = max(best, height * (i - j))
            start = j
        stack.append((start, h))
    return best