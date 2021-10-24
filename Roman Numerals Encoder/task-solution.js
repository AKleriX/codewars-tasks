function solution(number){
    const romanNums = {
        M: 1000, CM: 900, D: 500, CD: 400,
        C: 100, XC: 90, L: 50, XL: 40,
        X: 10, IX: 9, V: 5, IV: 4, I: 1
    }
    let resultRomanNumber = '';
    for (let i in romanNums) {
        while (number >= romanNums[i]) {
            number -= romanNums[i];
            resultRomanNumber += i;
        }
    }
    return resultRomanNumber;
}