const mutate = (chromosome, p) =>
  [...chromosome].map((d) => (Math.random() <= p ? (d === '1' ? '0' : '1') : d)).join('');
