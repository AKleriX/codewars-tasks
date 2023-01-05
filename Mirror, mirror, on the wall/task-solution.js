function mirror(data) {
  let sortArr = [...data].sort((a, b) => a - b);
  return [...sortArr, ...sortArr.slice(0, -1).reverse()];
}
