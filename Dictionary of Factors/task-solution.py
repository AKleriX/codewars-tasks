def factors_range(n, m):
    return {i:[j for j in range(2,i) if i%j==0] or ['None'] for i in range(n,m+1)}