const solve = (n, k) => {
  let arr = Array.from({ length: n }, (_, i) => i);

  for (let i = 0; i < n; i++) arr = arr.slice(0, i).concat(arr.slice(i).reverse());

  return arr.indexOf(k);
};
