function solve(arr){
  let sum = arr.reduce((sum, n) => sum + n);
  return Math.min(Math.floor(sum / 2), sum - Math.max.apply(null, arr));
}