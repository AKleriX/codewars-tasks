const differentDigitsNumberSearch = (arr) => {
  for (let num of arr) {
    let str = num.toString(),
      set = new Set(str);
    if (set.size === str.length) return num;
  }
  return -1;
};
