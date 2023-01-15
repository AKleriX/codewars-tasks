const sortVowels = (s) =>
  typeof s === 'string'
    ? [...s].map((l) => (/[aeiou]/i.test(l) ? '|' + l : l + '|')).join('\n')
    : '';
