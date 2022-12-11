export function splitTheBill(x: { [k: string]: number }): { [k: string]: number } {
  let sum: number = 0,
    counter: number = 0,
    newObj: { [key: string]: number } = {};
  for (let i in x) {
    counter++;
    sum += x[i];
  }
  for (let i in x) newObj[i] = Math.round((x[i] - sum / counter) * 100) / 100;
  return newObj;
}
