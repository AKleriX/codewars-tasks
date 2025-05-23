def summation_of_primes(primes):
    if primes < 2:
        return 0
    sieve = [True] * (primes + 1)
    sieve[0] = sieve[1] = False
    for i in range(2, int(primes ** 0.5) + 1):
        if sieve[i]:
            for j in range(i * i, primes + 1, i):
                sieve[j] = False
    return sum(i for i, is_prime in enumerate(sieve) if is_prime)