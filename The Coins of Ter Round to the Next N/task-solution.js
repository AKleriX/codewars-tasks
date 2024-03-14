const adjust = (coin, price) => {
  let k = price;
  while (k % coin) k++;
  return k;
};
