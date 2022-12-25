export function pendulum(values: number[]) {
  let sortArr: number[] = [...values].sort((a, b) => a - b),
    res: number[] = [];
  for (let i = 0; i < sortArr.length; i++)
    if (!(i % 2)) res.unshift(sortArr[i]);
    else res.push(sortArr[i]);
  return res;
}
