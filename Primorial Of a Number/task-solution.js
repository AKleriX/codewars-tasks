function isPrime(num){
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (!(num % i)) return false;
    return true;
}

function numPrimorial(n){
    let primes = [],
        checkedNum= 2;
    while (primes.length < n){
        if (isPrime(checkedNum)) primes.push(checkedNum);
        checkedNum++;
    }
    return primes.reduce((mul, num) => mul * num);
}