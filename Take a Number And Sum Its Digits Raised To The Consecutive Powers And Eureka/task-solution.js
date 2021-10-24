function sumDigPow(a, b) {
    let resultArr = [];
    for (let i = a; i <= b; i ++){
        if (i < 10)
            resultArr.push(i);
        else{
            let powSum = i.toString().split('').reduce((sum, digital, index) => {
                return sum + Math.pow(digital, index + 1);
            }, 0);
            if (i === powSum) resultArr.push(i);
        }
    }
    return resultArr;
}