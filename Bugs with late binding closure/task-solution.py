def create_multiplications(n):
    return [lambda x,i=i: i*x for i in range(n)]