const gordon = (a) =>
  a
    .split(' ')
    .map(
      (w) =>
        w
          .replace(/[eoui]/gi, '*')
          .replace(/a/gi, '@')
          .toUpperCase() + '!!!!',
    )
    .join(' ');
