const dropWhile = (arr, pred) => {
  let lastIdx = 0;
  for (let i = 0; i < arr.length; i++)
    if (!pred(arr[i])) {
      lastIdx = i;
      break;
    } else if (i === arr.length - 1) return [];
  return arr.slice(lastIdx);
};
