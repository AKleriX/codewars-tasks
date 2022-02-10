export function smallest(n: number): number[] {
  let numStr: string = n.toString(),
      minData: number[] = [n, 0, 0];
  for (let i = 0; i < numStr.length; i++){
    let numLast: string = numStr.slice(0, i) + numStr.slice(i + 1);
    for (let j = 0; j <= numLast.length; j++){
      let currentNum: number = Number(numLast.slice(0, j) + numStr[i] + numLast.slice(j));
      if (currentNum < minData[0]) minData = [currentNum, i, j];
    }
  }
  return minData;
}