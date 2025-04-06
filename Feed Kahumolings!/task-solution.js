const serve = (food, flavour, mouths) => {
  let portions = [],
    factorSum = 0;
  for (let i = 0; i < mouths; i++) factorSum += Math.pow(flavour, i);
  let base = food / factorSum;
  for (let i = 0; i < mouths; i++)
    portions.push(Math.round(base * Math.pow(flavour, i) * 1000) / 1000);
  return portions;
};
