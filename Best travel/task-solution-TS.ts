export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
  let bestSum: number = 0;
  const getBestSum = (towns: number[] = [], lastIndex: number = -1): void => {
    if (towns.length === k){
      let sum: number = towns.reduce((sum, d) => sum + d);
      if (sum <= t && sum > bestSum)
        bestSum = sum;
      return;
    }
    for (let i = lastIndex + 1; i < ls.length; i++)
      getBestSum(towns.concat(ls[i]), i);
  }
  getBestSum();
  return bestSum || null;
}