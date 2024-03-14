const calculateRetirement = (deposit, targetBalance) => {
  let d = {};
  for (let i = 1; i < 7; i++) {
    let cV = 0,
      c = 0;
    while (cV < targetBalance) {
      c++;
      cV += deposit;
      if (cV < targetBalance) cV += cV * (i / 100);
    }
    d[i] = c;
  }
  return d;
};
