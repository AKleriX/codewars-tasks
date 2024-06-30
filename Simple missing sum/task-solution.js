const solve = (arr) => {
  const sortedArr = [...arr].sort((a, b) => a - b);

  let res = 1;

  for (let num of sortedArr) {
    if (num > res) break;
    res += num;
  }

  return res;
};
