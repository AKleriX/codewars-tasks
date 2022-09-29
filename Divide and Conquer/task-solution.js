function divCon(x) {
  let sumNums = 0,
    sumStrs = 0;
  for (let i = 0; i < x.length; i++)
    if (typeof x[i] === 'string') sumStrs += +x[i];
    else sumNums += x[i];
  return sumNums - sumStrs;
}
