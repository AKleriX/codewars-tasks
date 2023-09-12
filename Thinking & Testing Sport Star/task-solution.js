const testit = (act, s) =>
  [...s]
    .map((v, i) =>
      (act[i] === 'run' && v === '_') || (act[i] === 'jump' && v === '|')
        ? v
        : v === '_'
        ? 'x'
        : '/',
    )
    .join('');
