function additionWithoutCarrying(a, b) {
  let aStr = a.toString(),
    bStr = b.toString(),
    res = '';
  const maxLength = Math.max(aStr.length, bStr.length);
  aStr = '0'.repeat(maxLength - aStr.length) + aStr;
  bStr = '0'.repeat(maxLength - bStr.length) + bStr;
  for (let i = maxLength - 1; i >= 0; i--) res = (+aStr[i] + +bStr[i]).toString().slice(-1) + res;
  return +res;
}
