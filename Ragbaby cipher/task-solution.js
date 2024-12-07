const encode = (text, key) => {
  const { keyedAlphabet, positions } = createKeyedAlphabet(key);
  let encodedMessage = '',
      charIdx = 1;

  for (const letter of text) {
    if (/[a-zA-Z]/.test(letter)) {
      const isUpper = letter === letter.toUpperCase(),
            lowerLetter = letter.toLowerCase(),
            encodedLetter = keyedAlphabet[(positions[lowerLetter] + charIdx) % 26];
      encodedMessage += isUpper ? encodedLetter.toUpperCase() : encodedLetter;
      charIdx++;
    } else {
      encodedMessage += letter;
      charIdx = 1;
    }
  }

  return encodedMessage;
}

const decode = (text, key) => {
  const { keyedAlphabet, positions } = createKeyedAlphabet(key);
  let decodedMessage = '',
      charIdx = 1;

  for (const letter of text) {
    if (/[a-zA-Z]/.test(letter)) {
      const isUpper = letter === letter.toUpperCase(),
            lowerLetter = letter.toLowerCase(),
            decodedLetter = keyedAlphabet[(positions[lowerLetter] + 26 - charIdx) % 26];
      decodedMessage += isUpper ? decodedLetter.toUpperCase() : decodedLetter;
      charIdx++;
    } else {
      decodedMessage += letter;
      charIdx = 1;
    }
  }

  return decodedMessage;
}

const createKeyedAlphabet = key => {
  const seen = new Set(),
        newKey = [];
  for (const letter of key)
    if (!seen.has(letter)) {
      newKey.push(letter);
      seen.add(letter);
    }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz',
        keyedAlphabet = newKey.join('') + [...alphabet].filter(letter => !seen.has(letter)).join(''),
        positions = {};
  for (let i = 0; i < 26; i++)
    positions[keyedAlphabet[i]] = i;
  return { keyedAlphabet, positions };
}