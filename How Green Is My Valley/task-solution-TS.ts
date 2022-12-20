export function makeValley(arr: number[]): number[] {
  let sortArr: number[] = [...arr].sort((a, b) => b - a),
    leftWing: number[] = [],
    rightWing: number[] = [];
  for (let i = 0; i < sortArr.length; i++)
    if (i % 2) rightWing.push(sortArr[i]);
    else leftWing.push(sortArr[i]);
  return [...leftWing, ...rightWing.reverse()];
}
