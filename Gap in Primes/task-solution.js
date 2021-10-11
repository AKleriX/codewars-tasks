function gap(g, m, n) {
    let lastPrimes = 0;

    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++){
            if (num % i === 0)
                return false;
        }
        return true;
    }

    for (let i = m; i <= n; i++){
        if (isPrime(i)){
            if (lastPrimes === 0)
                lastPrimes = i;
            else {
                if (i - lastPrimes === g)
                    return [lastPrimes, i];
                else lastPrimes = i;
            }
        }
    }

    return null;
}