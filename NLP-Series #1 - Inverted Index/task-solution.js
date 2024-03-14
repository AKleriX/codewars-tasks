const buildInvertedIndex = (collection, term, caseSensitive, exactMatch) => {
  const re = new RegExp(
    (exactMatch ? '\\b' : '') + term + (exactMatch ? '\\b' : ''),
    caseSensitive ? '' : 'i',
  );
  return collection.map((n, i) => (re.test(n) ? i + 1 : 0)).filter((v) => v);
};
