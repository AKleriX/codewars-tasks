function sumOfDivided(lst) {
  let endNum = Math.max.apply(null, lst.map(Math.abs)),
    resArr = [];
  for (let i = 2; i <= endNum; i++)
    if (isPrime(i)) {
      let divArr = lst.filter((n) => !(n % i)),
        sumNums = divArr.reduce((sum, n) => sum + n, 0);
      if (divArr.length) resArr.push([i, sumNums]);
    }
  return resArr;
}

const isPrime = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) if (!(n % i)) return false;
  return n > 1;
};
