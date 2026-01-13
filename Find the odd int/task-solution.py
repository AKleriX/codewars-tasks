def find_it(seq):
    nums = {}
    res = None
    for i in seq:
        nums[i] = 1 if not nums.get(i) else nums.get(i) + 1
    for i, c in nums.items():
        if c % 2 == 1:
            res = int(i)
            break
    return res