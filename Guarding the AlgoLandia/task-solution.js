const findNeededGuards = (k) => {
  let arr = [...k],
    counter = 0;
  for (let i = 0; i < k.length - 1; i++)
    if (!arr[i] && !arr[i + 1]) {
      counter++;
      i++;
    }
  return counter;
};
