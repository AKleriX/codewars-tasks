function* paperFold() {
  let n = 1;
  while (true) {
    let tmpN = n;
    while (!(tmpN % 2)) tmpN /= 2;
    n++;
    yield tmpN % 4 === 1 ? 1 : 0;
  }
}
