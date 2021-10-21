function digPow(n, p){
    let sumPowNum = n.toString().split('').reduce((sum, num, index) => {
        return sum + Math.pow(Number(num), p + index);
    }, 0);
    return sumPowNum % n === 0 ? sumPowNum / n : -1;
}