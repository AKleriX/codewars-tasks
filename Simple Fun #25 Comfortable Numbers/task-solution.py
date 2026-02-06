def comfortable_numbers(l, r):
    counter = 0
    for a in range(l, r):
        for b in range(a + 1, r + 1):
            if a - s(a) <= b <= a + s(a) and b - s(b) <= a <= b + s(b):
                counter += 1
    return counter
    
    
def s(x):
    return sum(map(int, str(x)))