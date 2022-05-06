function x(n) {
  let arr = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) arr[i][j] = i === j || i + j === n - 1 ? 1 : 0;
  return arr;
}
