function loneliest(str) {
  let trimStr = str.trim(),
    lettersAndSpaces = trimStr.match(/( *)([a-z])( *)/g),
    spaceCounter = {},
    max = 0,
    lettersMaxSpace = [];
  for (let i = 0; i < lettersAndSpaces.length; i++) {
    let endSpacesLength = i < lettersAndSpaces.length - 1 ? lettersAndSpaces[i].slice(1).length : 0,
      startSpacesLength = i > 0 ? lettersAndSpaces[i - 1].slice(1).length : 0;
    spaceCounter[lettersAndSpaces[i].trim()] = spaceCounter[lettersAndSpaces[i].trim()]
      ? endSpacesLength + startSpacesLength > spaceCounter[lettersAndSpaces[i].trim()]
        ? endSpacesLength + startSpacesLength
        : spaceCounter[lettersAndSpaces[i].trim()]
      : endSpacesLength + startSpacesLength;
  }
  for (let letter in spaceCounter) {
    if (max < spaceCounter[letter]) [max, lettersMaxSpace] = [spaceCounter[letter], []];
    if (max === spaceCounter[letter]) lettersMaxSpace.push(letter);
  }
  return lettersMaxSpace;
}
