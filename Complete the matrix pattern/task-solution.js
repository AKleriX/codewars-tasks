function makeMatrix(m, n) {
  let arr = [],
    num = m.toString();
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (i === j || j === n - 1 - i) row.push(num[0]);
      else if (i < n / 2 - 1 && j >= i + 1 && j <= n - 1 - i) row.push(num[1]);
      else if (i > n / 2 && j >= n - 1 - i && j <= i) row.push(num[2]);
      else if (j > n / 2) row.push(num[4]);
      else row.push(num[3]);
    }
    arr.push(row.join(' '));
  }
  return arr.join('\n');
}
