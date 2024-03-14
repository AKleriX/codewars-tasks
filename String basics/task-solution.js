const getUsersIds = (str) =>
  str
    .trim()
    .split(/, /)
    .map((s) => s.replace(/#/g, '').replace(/^uid/, '').toLowerCase().trim());
