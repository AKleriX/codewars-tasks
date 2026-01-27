from collections import deque

def is_keith_number(n):
    nums = deque(int(d) for d in str(n))
    s = sum(nums)
    counter = 1
    while s < n:
        nums.append(s)
        s = s - nums.popleft() + s
        counter += 1
    return False if n < 10 or n != s else counter