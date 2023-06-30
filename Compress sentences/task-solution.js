function compress(sentence) {
  let words = sentence.split(' ').map((w) => w.toLowerCase()),
    i = 0,
    counter = words.reduce((c, w) => ((c[w] = c[w] !== undefined ? c[w] : i++), c), {});
  return words.map((w) => counter[w]).join('');
}
