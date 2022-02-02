export function orderWeight(strng: string): string {
  let weights: string[] = strng.split(/\s+/);
  return weights.sort((a: string, b: string) => {
    let aSumDigit: number = [...a].reduce(getSumOfDigitReduce, 0),
        bSumDigit: number = [...b].reduce(getSumOfDigitReduce, 0);
    if (aSumDigit !== bSumDigit) return aSumDigit - bSumDigit;
    return a.localeCompare(b);
  }).join(' ');
}

const getSumOfDigitReduce = (sum: number, d: string): number => sum + +d;