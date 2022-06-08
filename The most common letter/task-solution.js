function replaceCommon(string, letter) {
  let maxCounter = [-1, 0, ''],
    lettersCounter = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      lettersCounter[string[i]] = lettersCounter[string[i]]
        ? [lettersCounter[string[i]][0], lettersCounter[string[i]][1] + 1]
        : [i, 1];
      if (
        maxCounter[1] < lettersCounter[string[i]][1] ||
        (maxCounter[1] === lettersCounter[string[i]][1] &&
          maxCounter[0] > lettersCounter[string[i]][0])
      )
        maxCounter = [lettersCounter[string[i]][0], lettersCounter[string[i]][1], string[i]];
    }
  }
  let regExp = new RegExp(maxCounter[2], 'g');
  return string.replace(regExp, letter);
}
