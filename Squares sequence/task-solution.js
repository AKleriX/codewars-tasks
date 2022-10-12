function squares(x, n) {
  let sqArr = [],
    currentX = x;
  for (let i = 1; i <= n; i++) {
    sqArr.push(currentX);
    currentX *= currentX;
  }
  return sqArr;
}
