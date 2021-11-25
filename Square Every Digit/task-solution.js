function squareDigits(num){
    return parseInt(num.toString().split('').map(d => Math.pow(parseInt(d),2)).join(''));
}