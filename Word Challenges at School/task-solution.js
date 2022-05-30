function wantedWords(n, m, forbid_let) {
  let currectWords = [],
    regExp = new RegExp(
      '^' +
        (forbid_let.length > 0 ? '[^' + forbid_let.join('') + ']' : '.') +
        '{' +
        (n + m).toString() +
        '}' +
        '$',
    );
  for (let i of wordList)
    if (regExp.test(i)) {
      let vowelsCounter = (i.match(/[aioue]/g) || []).length,
        consonantsCounter = (i.match(/[^aioue]/g) || []).length;
      if (n === vowelsCounter && m === consonantsCounter) currectWords.push(i);
    }
  return currectWords;
}
