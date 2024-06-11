const getFunction = (sequence) => {
  let dif = [];
  for (let i = 1; i < sequence.length; i++) dif.push(sequence[i] - sequence[i - 1]);

  let isLinear = dif.every((d) => d === dif[0]);

  if (!isLinear) return 'Non-linear sequence';

  let n = dif[0],
    m = sequence[0];

  if (n === 0) return `f(x) = ${m}`;
  else if (n === 1) {
    if (m === 0) return 'f(x) = x';
    else return `f(x) = x ${m > 0 ? '+ ' + m : '- ' + Math.abs(m)}`;
  } else if (n === -1) {
    if (m === 0) return 'f(x) = -x';
    else return `f(x) = -x ${m > 0 ? '+ ' + m : '- ' + Math.abs(m)}`;
  } else {
    if (m === 0) return `f(x) = ${n}x`;
    else return `f(x) = ${n}x ${m > 0 ? '+ ' + m : '- ' + Math.abs(m)}`;
  }
};
