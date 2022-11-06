export function maxRot(n: number): number {
  let maxNum: number = n,
    currentNum: string = n.toString(),
    headNum: string = '',
    strNum: string = currentNum;
  while (strNum.length > 1) {
    headNum += strNum[1];
    strNum = strNum.slice(2) + strNum[0];
    currentNum = headNum + strNum;
    if (+currentNum > maxNum) maxNum = +currentNum;
  }
  return maxNum;
}
