function reverseFizzBuzz(s) {
  let seq = s.split(' ');
  for (let i = 0; i < seq.length; i++) {
    if (/\d/.test(seq[i])) {
      for (let j = 0; j < seq.length; j++) seq[j] = Number(seq[i]) + (j - i);
      break;
    } else if (i === seq.length - 1) {
      let buzzIndex = seq.indexOf('Buzz'),
        fizzBuzzIndex = seq.indexOf('FizzBuzz');
      return buzzIndex === -1
        ? fizzBuzzIndex !== -1
          ? [15]
          : [3]
        : buzzIndex
        ? [9, 10]
        : seq.length === 1
        ? [5]
        : [5, 6];
    }
  }
  return seq;
}
