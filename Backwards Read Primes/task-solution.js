const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++)
        if (!(num % i)) return false;
    return true;
}

function backwardsPrime(start, stop){
    let backPrimesArray = [];
    for (let i = start; i <= stop; i++){
        let reverseNum = Number(i.toString().split('').reverse().join(''));
        if (isPrime(i) && isPrime(reverseNum) && i !== Number(reverseNum))
            backPrimesArray.push(i);
    }
    return backPrimesArray;
}