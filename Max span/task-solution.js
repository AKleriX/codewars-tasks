const maxSpan = (array) => {
  let max = 0;
  for (let i = 0; i < array.length; i++)
    max = Math.max(max, array.lastIndexOf(array[i]) - array.indexOf(array[i]) + 1);
  return max;
};
