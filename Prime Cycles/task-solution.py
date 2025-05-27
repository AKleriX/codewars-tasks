def find_max(n):
    from math import prod
    primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    seen = set()
    max_val = n

    while n not in seen:
        seen.add(n)
        max_val = max(max_val, n)
        digits = [int(d) for d in str(n)]
        mapped_primes = [primes[d] for d in digits]
        n = prod(mapped_primes)

    return max_val