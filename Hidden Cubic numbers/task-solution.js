function isSumOfCubes(s){
    let allCubicNums = (s.match(/\d{1,3}/g) || []).filter(n => Number(n) === n.split('').reduce((cubicSum, d) => cubicSum + Number(d)**3, 0));
    return allCubicNums.length ? `${allCubicNums.map(Number).join(' ')} ${allCubicNums.reduce((sum, n) => sum + Number(n), 0)} Lucky` : `Unlucky`;
  }