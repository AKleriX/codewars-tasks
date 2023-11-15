const arrayChange = (arr) => {
  let moves = 0,
    lastNum = arr[0];
  for (let i = 1; i < arr.length; i++)
    if (lastNum >= arr[i]) {
      moves += lastNum - arr[i] + 1;
      lastNum = lastNum + 1;
    } else lastNum = arr[i];
  return moves;
};
