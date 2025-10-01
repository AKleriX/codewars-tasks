def friendly_numbers(m, n):
    """
    Input
    m - first integer 
    n - second integer
    
    Return
    'Friendly!' if they are friendly pairs
    else
    'Am An' (their abundancies as rational strings)
    """
    from math import gcd, isqrt

    def sigma(x):
        if x == 1:
            return 1
        s = 1 + x
        for i in range(2, isqrt(x) + 1):
            if x % i == 0:
                s += i
                j = x // i
                if j != i:
                    s += j
        return s

    def abund(x):
        a, b = sigma(x), x
        g = gcd(a, b)
        return a // g, b // g

    def fmt(fr):
        a, b = fr
        return str(a) if b == 1 else f'{a}/{b}'

    am, an = abund(m), abund(n)
    return 'Friendly!' if am == an else f'{fmt(am)} {fmt(an)}'