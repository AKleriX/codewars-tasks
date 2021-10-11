function properFractions(n){
    let countProperFractions = n === 1 ? 0 : n;

    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i < 1){
            while (n % i < 1)
                n /= i;
            countProperFractions -= countProperFractions / i;
        }
    }

    if (n > 1) countProperFractions -= countProperFractions / n;

    return countProperFractions;
}