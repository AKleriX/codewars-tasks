function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (!(num % i)) return false;
    return true;
}

function minimumNumber(numbers){
    let numsSum = numbers.reduce((sum, num) => sum + num),
        primeCounter = numsSum;
    while (!isPrime(primeCounter))
        primeCounter++;
    return primeCounter - numsSum;
}