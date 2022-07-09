function decode(number) {
  let abc = 'abcdefghijklmnopqrstuvwxyz',
    code = number.split('98'),
    wordsAndNums = [];
  if (code[code.length - 1] === '') code = code.slice(0, -1);
  for (let i = 0; i < code.length; i++) {
    if (i % 2) wordsAndNums.push(parseInt(code[i], 2));
    else {
      let word = '';
      for (let j = 0; j < code[i].length; j += 3) word += abc[+code[i].slice(j, j + 3) - 101];
      wordsAndNums.push(word);
    }
  }
  return wordsAndNums.join(', ');
}
