const fireAndFury = function (tweet) {
  let words = tweet.match(/(FIRE)|(FURY)/g),
    wordsArr = [];
  if (!words || /[^EFIRUY]/g.test(tweet)) return 'Fake tweet.';
  wordsArr.push([words[0]]);
  for (let i = 1; i < words.length; i++)
    if (words[i] === words[i - 1])
      wordsArr[wordsArr.length - 1] = wordsArr[wordsArr.length - 1].concat([words[i]]);
    else wordsArr.push([words[i]]);
  return wordsArr
    .map((w) => {
      switch (w[0]) {
        case 'FIRE':
          return `You${' and you'.repeat(w.length - 1)} are fired!`;
        case 'FURY':
          return `I am${' really'.repeat(w.length - 1)} furious.`;
      }
    })
    .join(' ');
};
