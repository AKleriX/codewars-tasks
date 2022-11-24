const solve = (str) => {
  let revLetters = [...str.replace(/ /g, '')].reverse().join(''),
    words = str.split(' '),
    revWords = [],
    pos = 0;
  for (let i = 0; i < words.length; i++) {
    revWords.push(revLetters.slice(pos, pos + words[i].length));
    pos += words[i].length;
  }
  return revWords.join(' ');
};
