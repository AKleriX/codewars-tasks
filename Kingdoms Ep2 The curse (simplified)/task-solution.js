function translate(speech, vocabulary) {
  let words = speech.split(' '),
    currentSpeach = [];
  for (let i = 0; i < words.length; i++) {
    let sign = /[.,?!]/.test(words[i].slice(-1)) ? words[i].slice(-1) : '',
      currentWord = sign.length ? words[i].slice(0, -1) : words[i];
    for (let j = 0; j < vocabulary.length; j++) {
      let tmpWord = vocabulary[j];
      if (isTheSameWords(currentWord, tmpWord)) {
        currentSpeach.push(tmpWord + sign);
        break;
      }
    }
  }
  return currentSpeach.join(' ');
}

const isTheSameWords = (w1, w2) => {
  if (w1.length !== w2.length) return false;
  let tmpWord = [...w2];
  for (let i = 0; i < tmpWord.length; i++) if (w1[i] === '*') tmpWord[i] = '*';
  return w1 === tmpWord.join('');
};
