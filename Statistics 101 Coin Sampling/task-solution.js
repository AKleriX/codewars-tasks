const sample = (coin) => {
  let hC = 0;
  for (let i = 0; i < 10000; i++) if (coin()) hC++;
  return hC / 10000;
};
