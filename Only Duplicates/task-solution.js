function onlyDuplicates(str) {
  return [...str].filter((symbol, _, arr) => arr.indexOf(symbol) !== arr.lastIndexOf(symbol)).join('');
}