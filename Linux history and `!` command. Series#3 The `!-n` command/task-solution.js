const bangMinusN = (n, history) =>
  (history.split('\n').reverse()[n - 1] || `!-${n}: event not found`).replace(/\s+\d+\s+/, '');
