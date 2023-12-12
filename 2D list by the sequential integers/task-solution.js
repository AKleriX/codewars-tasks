const make2dList = (head, row, col) => {
  const res = [];
  for (let i = 0; i < row; i++) {
    const r = [];
    for (let j = 0; j < col; j++) r.push(head++);
    res.push(r);
  }
  return res;
};
