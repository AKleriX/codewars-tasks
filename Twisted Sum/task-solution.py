def compute_sum(n):
    sum = 0
    for i in range(n + 1):
        for j in str(i):
            sum += ord(j) - 48
    return sum