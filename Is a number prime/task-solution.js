function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (!(num % i)) return false;
    return num > 1;
}