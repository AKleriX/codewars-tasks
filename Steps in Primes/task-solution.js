function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (!(num % i)) return false
    return true;
}

function step(g, m, n) {
    for (let i = m; i <= n - g; i++)
        if (isPrime(i) && isPrime(i + g)) return [i, i + g];
    return null;
}