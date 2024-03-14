const getElement = (array, indexes) => {
  let currentVal = array;
  for (let i = 0; i < indexes.length; i++) currentVal = currentVal[indexes[i]];
  return currentVal;
};
