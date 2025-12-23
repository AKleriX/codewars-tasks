def splitlist(lst):
    t, dp = sum(lst) // 2, {0: set()}
    
    for i, n in enumerate(lst):
        for s in list(dp):
            if (ns := s + n) <= t and ns not in dp:
                dp[ns] = dp[s] | {i}
    
    idx = dp[max(dp)]
    return [lst[i] for i in idx], [v for i, v in enumerate(lst) if i not in idx]