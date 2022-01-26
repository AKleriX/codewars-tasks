const solution = (digits) => {
    let digitArr = digits.split(''),
        maxDigit = Math.max.apply(null, digitArr.slice(0, digitArr.length - 4)).toString(),
        maxNum = 0;
    while (digitArr.indexOf(maxDigit) > -1){
      let num = Number(digitArr.slice(digitArr.indexOf(maxDigit), digitArr.indexOf(maxDigit) + 5).join(''));
      digitArr = digitArr.slice(digitArr.indexOf(maxDigit) + 1);
      if (num > maxNum) maxNum = num;
    }
    return maxNum;
  }