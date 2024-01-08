const closedBracketWord = (word) => {
  const fHalf = word.slice(0, (word.length / 2) | 0),
    sHalf = [...word.slice(Math.ceil(word.length / 2))].reverse().join('');
  for (let i = 0; i < fHalf.length; i++)
    if (!(String.fromCharCode(27 - fHalf[i].charCodeAt(0) + 192) === sHalf[i])) return false;
  return !(word.length % 2);
};
