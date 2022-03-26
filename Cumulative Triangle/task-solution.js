function cumulativeTriangle(n) {
  let startNum = 1;
  for (let i = 1; i < n; i++) startNum += i;
  return (n * (2 * startNum + (n - 1))) / 2;
}
