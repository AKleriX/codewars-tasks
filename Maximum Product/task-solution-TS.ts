export function adjacentElementsProduct(array: number[]): number {
  let maxMul: number = -Infinity;
  for (let i = 0; i < array.length - 1; i++)
    if (maxMul < array[i] * array[i + 1]) maxMul = array[i] * array[i + 1];
  return maxMul;
}
