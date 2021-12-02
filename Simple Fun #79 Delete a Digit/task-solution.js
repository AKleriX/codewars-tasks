function deleteDigit(n) {
    let maxValue = 0,
        digitals =  n.toString().split('').map(Number);
    digitals.forEach((digit, i) => {
        let value = Number(digitals.slice(0, i).join('') + digitals.slice(i + 1).join(''));
        if (maxValue < value) maxValue = value;
    });
    return maxValue;
}