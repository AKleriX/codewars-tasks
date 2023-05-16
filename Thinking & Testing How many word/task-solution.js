function testit(s) {
  let word = 'word',
    idx = 0,
    counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (new RegExp(word[idx], 'i').test(s[i])) idx++;
    if (idx === word.length) {
      idx = 0;
      counter++;
    }
  }
  return counter;
}
