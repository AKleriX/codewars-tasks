function maxRot(n) {
  let maxNum = n,
    currentNum = n.toString(),
    headNum = '',
    strNum = currentNum;
  while (strNum.length > 1) {
    headNum += strNum[1];
    strNum = strNum.slice(2) + strNum[0];
    currentNum = headNum + strNum;
    if (+currentNum > maxNum) maxNum = +currentNum;
  }
  return maxNum;
}
