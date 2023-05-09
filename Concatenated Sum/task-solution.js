function checkConcatenatedSum(num, r) {
  let numStr = Math.abs(num).toString(),
    res = 0;
  for (let i = 0; i < numStr.length; i++) res += +numStr[i].repeat(r) * (num < 0 ? -1 : 1);
  return res === num;
}
