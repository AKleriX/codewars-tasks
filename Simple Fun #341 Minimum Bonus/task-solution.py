from typing import List

def minimum_bonus(scores):
    n = len(scores)
    if n == 0:
        return 0

    bonus = [1] * n
    
    for i in range(1, n):
        if scores[i] > scores[i - 1]:
            bonus[i] = bonus[i - 1] + 1
            
    for i in range(n - 2, -1, -1):
        if scores[i] > scores[i + 1]:
            bonus[i] = max(bonus[i], bonus[i + 1] + 1)

    return sum(bonus)