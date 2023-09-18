const removeOrAdd = (string) =>
  string
    .split(' ')
    .map((w) => (w.slice(-1) !== '!' ? w + '!' : /!!$/.test(w) ? w : w.slice(0, -1)))
    .join(' ');
