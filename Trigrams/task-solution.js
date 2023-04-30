function trigrams(phrase) {
  let trigrams = [];
  for (let i = 0; i < phrase.length - 2; i++)
    trigrams.push(phrase.slice(i, i + 3).replace(/\s/g, '_'));
  return trigrams.join(' ');
}
