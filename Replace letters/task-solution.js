function replaceLetters(word) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    let c = /[aioue]/.test(word[i]) ? -1 : 1;
    for (let j = alphabet.indexOf(word[i]); newWord.length === i; j += c) {
      if (!alphabet[j]) j = j > 25 ? 0 : 25;
      if ((c === 1 && /[aioue]/.test(alphabet[j])) || (c === -1 && /[^aioue]/.test(alphabet[j])))
        newWord += alphabet[j];
    }
  }
  return newWord;
}
