const letterPattern = (words) => {
  const firstWord = words[0];
  let result = '';

  for (let i = 0; i < firstWord.length; i++) {
    const char = firstWord[i];
    if (words.every((word) => word[i] === char)) result += char;
    else result += '*';
  }

  return result;
};
