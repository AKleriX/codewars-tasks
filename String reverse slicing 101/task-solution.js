const reverseSlice = (str) => {
  let res = [],
    currentStr = '';
  for (let i = 0; i < str.length; i++) {
    currentStr = str[i] + currentStr;
    res.unshift(currentStr);
  }
  return res;
};
