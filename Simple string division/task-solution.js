const solve = (str, k) => {
  const len = str.length - k > 0 ? str.length - k : 1;
  let arr = [];
  for (let i = 0; i < str.length - len + 1; i++) arr.push(+str.slice(i, i + len));
  return Math.max(...arr);
};
