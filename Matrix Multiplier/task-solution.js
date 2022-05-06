function getMatrixProduct(a, b) {
  let mul = [];
  if (a[0].length !== b.length) return -1;
  for (let i = 0; i < a.length; i++) {
    let row = [];
    for (let k = 0; k < b[0].length; k++) {
      let sum = 0;
      for (let j = 0; j < b.length; j++) sum += a[i][j] * b[j][k];
      row.push(sum);
    }
    mul.push(row);
  }
  return mul;
}
