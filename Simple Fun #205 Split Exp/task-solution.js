const splitExp = (n) => {
  const [c, d] = n.split('.'),
    arrayC = [],
    arrayD = [];
  for (let i = 0; i < c.length; i++)
    if (c[i] !== '0') arrayC.push(c[i] + '0'.repeat(c.length - 1 - i));
  if (d)
    for (let i = 0; i < d.length; i++) if (d[i] !== '0') arrayD.push('.' + '0'.repeat(i) + d[i]);
  return [...arrayC, ...arrayD];
};
