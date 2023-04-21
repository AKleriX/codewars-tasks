function shifter(s) {
  let words = s.split(' '),
    wordsCounter = new Set(words.filter((w) => /^[HINOSXZMW]+$/.test(w)));
  return wordsCounter.size;
}
