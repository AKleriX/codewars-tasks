const splitNumbers = (n) => {
  let bits = [...n.toString(2)].reverse(),
    a = new Array(bits.length).fill(0),
    b = new Array(bits.length).fill(0),
    c = 0;
  for (let i = 0; i < bits.length; i++)
    if (bits[i] === '1') {
      if (c % 2) b[i] = 1;
      else a[i] = 1;
      c++;
    }
  return [parseInt(a.reverse().join(''), 2), parseInt(b.reverse().join(''), 2)];
};
