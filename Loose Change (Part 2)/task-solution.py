def loose_change(coins_list, amount_of_change):
    dp = [0] + [float('inf')] * amount_of_change
    
    for amount in range(1, amount_of_change + 1):
        for coin in coins_list:
            if coin <= amount:
                dp[amount] = min(dp[amount], dp[amount - coin] + 1)
    
    return dp[amount_of_change]
