const validWord = function (dictionary, word) {
  if (!word) return true;
  for (let i = 1; i <= word.length; i++)
    if (dictionary.includes(word.slice(0, i)) && validWord(dictionary, word.slice(i))) return true;
  return false;
};
