function ranks(a) {
  let sortArr = [...a].sort((a, b) => b - a);
  return a.map((val) => sortArr.indexOf(val) + 1);
}
