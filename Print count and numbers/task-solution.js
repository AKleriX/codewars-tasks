const countMe = (data) => {
  let seq = data.match(/(.)\1*/g) || [];
  for (let i = 0; i < seq.length; i++) {
    if (!/^\d+$/.test(seq[i])) return '';
    seq[i] = seq[i].length.toString() + seq[i][0];
  }
  return seq.join('');
};
