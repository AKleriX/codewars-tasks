const countConsonants = (str) =>
  new Set(
    str
      .toLowerCase()
      .replace(/[aeoui !$@?\d]/g, '')
      .split(''),
  ).size;
