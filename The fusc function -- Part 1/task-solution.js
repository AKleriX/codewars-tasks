const fusc = (n) =>
  !n ? 0 : n === 1 ? 1 : n % 2 ? fusc(Math.floor(n / 2)) + fusc(Math.ceil(n / 2)) : fusc(n / 2);
