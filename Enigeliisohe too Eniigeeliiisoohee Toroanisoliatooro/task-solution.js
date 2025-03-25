const toexuto = function (text) {
  const vowels = ['a', 'e', 'i', 'o', 'u'],
    alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let char of text) {
    const lowerChar = char.toLowerCase();
    if (vowels.includes(lowerChar)) result += char;
    else if (/[a-z]/i.test(char) && !/[à-ÿÀ-ß]/.test(char)) {
      let vowel = '';
      for (let i = alphabet.indexOf(lowerChar) - 1; i >= 0; i--)
        if (vowels.includes(alphabet[i])) {
          vowel = alphabet[i];
          break;
        }
      result += char + vowel;
    } else result += char;
  }

  return result;
};
