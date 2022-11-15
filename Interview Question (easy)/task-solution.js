function getStrings(city) {
  let letters = [...city.replace(/\W/g, '')].reduce(
    (c, l) => ((c[l.toLowerCase()] = (c[l.toLowerCase()] || 0) + 1), c),
    {},
  );
  return Object.keys(letters)
    .map((l) => `${l}:${'*'.repeat(letters[l])}`)
    .join(',');
}
