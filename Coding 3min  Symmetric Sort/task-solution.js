function sc(array) {
  let sortArr = array.sort((a, b) => a - b);
  return sortArr.filter((_, i) => !(i % 2)).concat(sortArr.filter((_, i) => i % 2).reverse());
}
