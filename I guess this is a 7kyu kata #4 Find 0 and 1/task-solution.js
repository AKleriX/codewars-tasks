const find01 = (arr) => {
  let c = 0;
  for (let i = 1; i < arr.length - 1; i++)
    for (let j = 1; j < arr[i].length - 1; j++)
      if (
        arr[i][j] !== arr[i - 1][j] &&
        arr[i][j] !== arr[i][j - 1] &&
        arr[i][j] !== arr[i][j + 1] &&
        arr[i][j] !== arr[i + 1][j]
      )
        c++;
  return c;
};
