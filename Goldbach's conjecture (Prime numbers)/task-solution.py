def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def goldbach(even_number):
    if even_number <= 2 or even_number % 2 != 0:
        return []

    result = []
    for a in range(2, even_number // 2 + 1):
        b = even_number - a
        if is_prime(a) and is_prime(b):
            result.append([a, b])
    return result