function solution(roman){
    const romanNums = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    return roman.split('').map((num, index) => {
        let arabNum = romanNums[num];
        if (index < roman.length - 1){
            if (romanNums[roman[index + 1]] > arabNum)
                arabNum *= -1;
        }
        return arabNum;
    }).reduce((sum, num) => sum + num, 0);
}