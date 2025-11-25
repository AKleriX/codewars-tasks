from math import prod

def count_find_num(primesL, limit):
    base = prod(primesL)
    if base > limit:
        return []
    stack = [base]
    seen = {base}
    count = 0
    largest = base
    while stack:
        x = stack.pop()
        count += 1
        if x > largest:
            largest = x
        for p in primesL:
            y = x * p
            if y <= limit and y not in seen:
                seen.add(y)
                stack.append(y)
    return [count, largest]