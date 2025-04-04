const reverseList = (list) => {
  let result = null;
  while (list) {
    result = [list[0], result];
    list = list[1];
  }
  return result;
};
