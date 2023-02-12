function trouble(x, t) {
  let arr = [...x];
  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i] + arr[i + 1] === t) {
      arr.splice(i + 1, 1);
      i--;
    }
  return arr;
}
