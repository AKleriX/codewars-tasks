const guess = (f, i) => {
  let res = [],
    sum01 = f(0, 1),
    sum12 = f(1, 2),
    sum02 = f(0, 2);

  res[0] = (sum01 + sum02 - sum12) / 2;
  res[1] = sum01 - res[0];
  res[2] = sum12 - res[1];

  for (let j = 3; j < i; j++) res[j] = f(j - 1, j) - res[j - 1];

  return res;
};
