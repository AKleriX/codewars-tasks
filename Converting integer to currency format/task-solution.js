const toCurrency = (price) => {
  let strPrice = price.toString(),
    res = '';
  while (strPrice.length) {
    res = strPrice.slice(-3) + ',' + res;
    strPrice = strPrice.slice(0, strPrice.length - 3);
  }
  return res.slice(0, res.length - 1);
};
