export function translate(speech: string, vocabulary: string[]): string {
  let words: string[] = speech.split(' '),
    currentSpeach: string[] = [];
  for (let i = 0; i < words.length; i++) {
    let sign: string = /[.,?!]/.test(words[i].slice(-1)) ? words[i].slice(-1) : '',
      currentWord: string = sign.length ? words[i].slice(0, -1) : words[i];
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

const isTheSameWords = (w1: string, w2: string): boolean => {
  if (w1.length !== w2.length) return false;
  let tmpWord = [...w2];
  for (let i = 0; i < tmpWord.length; i++) if (w1[i] === '*') tmpWord[i] = '*';
  return w1 === tmpWord.join('');
};
