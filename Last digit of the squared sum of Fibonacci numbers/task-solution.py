def fibonacci_squared_sum(n):
    a,b=0,1
    for _ in range(n%60): a,b=b,(a+b)%10
    return a*b%10