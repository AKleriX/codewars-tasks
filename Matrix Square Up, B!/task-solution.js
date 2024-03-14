const matrixSquareUp = (b) => {
  const res = [];
  for (let i = 0; i < b; i++) {
    let row = [];
    for (let j = 0; j < b; j++)
      if (b - j <= i + 1) row.push((b - j).toString());
      else row.push('x');
    res.push(row);
  }
  return res;
};
