from gmpy2 import is_prime

def get_right_truncatable_primes(base):
    heads = []
    current = [p for p in range(2, base) if is_prime(p)]
    
    while current:
        next_level = []
        for num in current:
            children = [num * base + d for d in range(base) if is_prime(num * base + d)]
            if children:
                next_level.extend(children)
            else:
                heads.append(num)
        current = next_level
    
    return heads