def odd_dig_primes(n):
    result = [0, 0, 0]
    while result[2] <= n:
        result[0] += 1;
        result[1] = result[2]
        result[2] = get_next_podp(result[2])
    result[0] -= 1;
    return result
        

def is_prime(n):
    for i in range(3, round(n**(1/2)) + 1, 2):
        if n % i == 0: 
            return False
    return True if n > 1 and n % 2 else False

def is_odd_digits(n):
    for i in str(n):
        if int(i) % 2 == 0:
            return False
    return True

def get_next_podp(n):
    val = n + 1
    while not is_prime(val) or not is_odd_digits(val):
        val += 1
    return val