String.prototype.characterCount = function (chars) {
  if (chars === undefined) return undefined;

  const countOccurrences = (str, char) => str.split(char).length - 1;

  if (typeof chars === 'string' && chars.length === 1) return countOccurrences(this, chars);
  else {
    const charArray = Array.isArray(chars) ? chars : chars.split('');
    return charArray.map((char) => countOccurrences(this, char));
  }
};
