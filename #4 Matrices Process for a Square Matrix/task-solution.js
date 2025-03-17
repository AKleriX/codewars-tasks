const avgDiags = (m) => {
  let sumPos = 0,
    sumNeg = 0,
    countPos = 0,
    countNeg = 0;
  const size = m.length;

  for (let idx = 0; idx < size; idx++) {
    const mainVal = m[idx][idx],
      secVal = m[size - idx - 1][idx];

    if (idx % 2 && mainVal >= 0) {
      sumPos += mainVal;
      countPos++;
    }

    if (idx % 2 === 0 && secVal < 0) {
      sumNeg += secVal;
      countNeg++;
    }
  }

  const avgPos = countPos ? Math.round(sumPos / countPos) : -1,
    avgNeg = countNeg ? Math.round(Math.abs(sumNeg / countNeg)) : -1;

  return [avgPos, avgNeg];
};
