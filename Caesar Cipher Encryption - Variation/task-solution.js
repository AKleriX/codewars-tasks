function caesarEncode(phrase, shift) {
  return phrase
    .split(' ')
    .map((w) => {
      let newWord = '';
      for (let i = 0; i < w.length; i++)
        newWord += String.fromCharCode(((w[i].charCodeAt() - 97 + shift) % 26) + 97);
      shift++;
      return newWord;
    })
    .join(' ');
}
