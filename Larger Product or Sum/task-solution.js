function sumOrProduct(array, n) {
  let sortArr = array.sort((a, b) => a - b),
    sum = sortArr.slice(-n).reduce((s, num) => s + num),
    prod = sortArr.slice(0, n).reduce((p, num) => p * num);
  return sum > prod ? 'sum' : sum < prod ? 'product' : 'same';
}
