const reverseMessage = (str) =>
  str
    ? [...str]
        .reverse()
        .join('')
        .split(' ')
        .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join(' ')
    : str;
