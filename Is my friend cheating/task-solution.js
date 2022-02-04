function removeNb (n) {
  let numsSum = n * (1 + n) / 2,
      resArr = [];
  for (let i = 1; i <= n; i++){
    let num = (numsSum - i) / (i + 1);
    if (!(num % 1) && num <= n)
      resArr.push([i, num]);
  }
  return resArr;
}