const solution = (arr, options) => {
  const newArr = [];
  for (let i = 0; i < arr.length; ++i) newArr.push(arr[i] + 2 * options.modifier);
  return newArr;
};
