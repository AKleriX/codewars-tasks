const lightBulbs = (lights, n) => {
  let arr = [...lights];
  for (let i = 0; i < n; i++)
    arr = arr.map((_, j) => (arr[(j - 1 + arr.length) % arr.length] === 1 ? 1 - arr[j] : arr[j]));
  return arr;
};
