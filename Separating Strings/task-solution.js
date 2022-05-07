function sepStr(str) {
  let words = str.split(' '),
    maxLenWord = Math.max.apply(
      null,
      words.map((w) => w.length),
    ),
    letters = [];
  for (let i = 0; i < maxLenWord; i++) {
    letters.push([]);
    for (let j = 0; j < words.length; j++) letters[i].push(words[j][i] ? words[j][i] : '');
  }
  return letters;
}
