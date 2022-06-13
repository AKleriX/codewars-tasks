function findSecretMessage(paragraph) {
  let wordsCounter = {},
    freqWords = [],
    words = paragraph
      .toLowerCase()
      .replace(/[^0-9a-z ]/g, '')
      .split(' ');
  for (let i = 0; i < words.length; i++) {
    if (!wordsCounter.hasOwnProperty(words[i])) wordsCounter[words[i]] = [0, -1];
    wordsCounter[words[i]] =
      wordsCounter[words[i]][0] === 1
        ? [wordsCounter[words[i]][0] + 1, i]
        : [wordsCounter[words[i]][0] + 1, wordsCounter[words[i]][1]];
  }
  for (let word in wordsCounter)
    if (wordsCounter[word][0] > 1) freqWords.push([word, wordsCounter[word][1]]);
  return freqWords
    .sort((a, b) => a[1] - b[1])
    .map((w) => w[0])
    .join(' ');
}
