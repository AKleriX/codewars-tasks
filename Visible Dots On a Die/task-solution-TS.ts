export function totalAmountVisible(topNum: number, numOfSides: number): number {
  let visibleAmount: number = 0,
    vals: number[] = Array.from({ length: numOfSides }, (_, i) => i + 1).reverse();
  for (let i = 1; i <= numOfSides; i++) if (i !== vals[topNum - 1]) visibleAmount += i;
  return visibleAmount;
}
