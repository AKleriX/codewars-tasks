function squareUp(n) {
  let res = [];
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) res.push(0);
    for (let k = n - i; k > 0; k--) res.push(k);
  }
  return res;
}
