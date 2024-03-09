const bittyWords = (words, bits) => {
  let w = words.split(' '),
    b = bits.toString(2).padStart(w.length, '0');
  return w.filter((_, i) => b[i] === '1').join(' ');
};
