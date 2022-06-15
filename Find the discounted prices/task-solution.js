function findDiscounted(prices) {
  let pricesArr = prices.split(' ').map(Number);
  for (let i = 0; i < pricesArr.length; i++) {
    if (pricesArr[i] !== false) {
      let bigPriceIndex = pricesArr.indexOf(pricesArr[i] + pricesArr[i] / 3, i + 1);
      if (bigPriceIndex > -1) pricesArr[bigPriceIndex] = false;
    }
  }
  return prices.length ? pricesArr.filter((n) => n !== false).join(' ') : '';
}
