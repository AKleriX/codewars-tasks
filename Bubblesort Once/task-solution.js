function bubblesortOnce(a) {
  let arr = [...a];
  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  return arr;
}
