const removeNthElement = (arr, n) => {
  let arrCopy = [...arr];
  arrCopy.splice(n, 1);
  return arrCopy;
};
