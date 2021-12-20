const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (!(num % i)) return false;
    return true;
}

const nextPrime = (n) => {
    let nIterator = n + 1 === 1 ? 2 : n + 1;
    while(!isPrime(nIterator))
        nIterator++;
    return nIterator;
}