const manipulate = (num) => {
  let halfLen = Math.round(num.toString().length / 2);
  return Math.floor(num / 10 ** halfLen) * 10 ** halfLen;
};
