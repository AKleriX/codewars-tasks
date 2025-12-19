def almost_everywhere_zero(n, k):
    s = str(n)
    memo = {}
    
    def dp(pos, cnt, tight, started):
        if pos == len(s):
            return int(cnt == k and started)
        
        key = (pos, cnt, tight, started)
        if key in memo:
            return memo[key]
        
        limit = int(s[pos]) if tight else 9
        res = 0
        
        for d in range(limit + 1):
            if not started and d == 0:
                res += dp(pos + 1, 0, tight and d == limit, False)
            elif cnt + (d > 0) <= k:
                res += dp(pos + 1, cnt + (d > 0), tight and d == limit, True)
        
        memo[key] = res
        return res
    
    return dp(0, 0, True, False)