function createArrayOfTiers(num) {
  let strNum = num.toString(),
    cutDigits = [];
  for (let i = 1; i <= strNum.length; i++) cutDigits.push(strNum.slice(0, i));
  return cutDigits;
}
