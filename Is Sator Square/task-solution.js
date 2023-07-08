function isSatorSquare(tablet) {
  let words = new Set();
  for (let i = 0; i < tablet.length; i++) {
    words.add(tablet[i].join(''));
    words.add([...tablet[i]].reverse().join(''));
    words.add(getVWord(tablet, i));
    words.add([...getVWord(tablet, i)].reverse().join(''));
  }
  return words.size <= tablet.length;
}

const getVWord = (t, i) => t.map((l) => l[i]).reduce((w, l) => w + (l ? l[0] : ''), '');
