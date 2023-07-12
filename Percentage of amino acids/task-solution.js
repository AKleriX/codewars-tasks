const aaPercentage = (seq, a = ['A', 'I', 'L', 'M', 'F', 'W', 'Y', 'V']) => {
  let counter = 0;
  for (let i = 0; i < seq.length; i++) if (a.includes(seq[i])) counter++;
  return Math.round((counter / seq.length) * 100);
};
