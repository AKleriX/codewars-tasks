const realSize = (arrays) => {
  let counter = 0;
  for (let i = 0; i < arrays.length; i++)
    if (Array.isArray(arrays[i])) counter += realSize(arrays[i]);
    else if (Number.isInteger(arrays[i])) counter++;
  return counter;
};
