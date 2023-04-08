function eqSumPowdig(hMax, exp) {
  let res = [];
  for (let i = 2; i <= hMax; i++)
    if (i === [...i.toString()].reduce((s, n) => s + (+n) ** exp, 0)) res.push(i);
  return res;
}
