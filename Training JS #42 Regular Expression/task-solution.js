const regex = /\d{3}(?!\$)/g; /*coding regular expression here..*/
const addCommas = (money, reg) =>
  [
    ...[...money]
      .reverse()
      .join('')
      .replace(reg, (x) => x + ','),
  ]
    .reverse()
    .join('');
