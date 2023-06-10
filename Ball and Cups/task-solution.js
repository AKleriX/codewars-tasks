function cupAndBalls(b, arr) {
  for (let i = 0; i < arr.length; i++)
    if (arr[i].includes(b)) b = arr[i].filter((n) => n !== b)[0] || b;
  return b;
}
