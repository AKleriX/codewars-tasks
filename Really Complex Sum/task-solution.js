const complexSum = arr => {
  let re = 0,
      im = 0;
  for (let c of arr) {
    let r = c.match(/-?\d+(?!\d*i)/),
        i = c.match(/[+-]?\d*(?=i)/);
    r = r ? +r[0] : 0;
    if (i) {
      if (i[0] === '-') i[0] = '-1';
      if (i[0] === '+' || i[0] === '') i[0] = '1';
      i = +i[0];
    } else
      i = 0;
    re += r;
    im += i;
  }
  if (re && im > 0) return im === 1 ? `${re}+i` : `${re}+${im}i`;
  if (re && im < 0) return im === -1 ? `${re}-i` : `${re}${im}i`;
  if (re && im === 0) return `${re}`;
  if (!re && im > 0) return im === 1 ? `i` : `${im}i`;
  if (!re && im < 0) return im === -1 ? `-i` : `${im}i`;
  return '0';
};