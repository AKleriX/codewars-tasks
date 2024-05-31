const complete = (str) => {
  let c = 1;
  while (str.slice(c) !== [...str.slice(c)].reverse().join('')) c++;
  return str + [...str.slice(0, c)].reverse().join('');
};
