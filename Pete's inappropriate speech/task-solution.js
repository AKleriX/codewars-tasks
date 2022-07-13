function peteTalk(speech, ok = []) {
  let lowerOk = ok.map((w) => w.toLowerCase());
  return speech
    .split(/(?<=[!?.]) /)
    .map((s) =>
      s
        .split(' ')
        .map((w, i, arr) => {
          let word = /[:;.,?!]/.test(w[w.length - 1])
              ? w.slice(0, -1).toLowerCase()
              : w.toLowerCase(),
            sign = /[:;.,?!\]]/.test(w[w.length - 1]) ? w.slice(-1) : '';
          if (!lowerOk.includes(word) && word.length > 2)
            word = word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
          if (!i) word = word[0].toUpperCase() + word.slice(1);
          return word + sign;
        })
        .join(' '),
    )
    .join(' ');
}
