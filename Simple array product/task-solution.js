function solve(arr) {
  let max = 1,
    min = 1;
  for (let i = 0; i < arr.length; i++) {
    let currentMax = Math.max(...arr[i]),
      currentMin = Math.min(...arr[i]),
      comp = [max * currentMax, max * currentMin, min * currentMax, min * currentMin];
    max = Math.max(...comp);
    min = Math.min(...comp);
  }
  return max;
}
