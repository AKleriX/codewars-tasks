const toAcronym = (inp) =>
  inp
    .split(' ')
    .map((w) => w[0].toUpperCase())
    .join('');
