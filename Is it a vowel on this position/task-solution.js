const checkVowel = (string, position) =>
  position < string.length && position >= 0 && /[aeoui]/i.test(string[position]);
