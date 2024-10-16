const findLongestSubstr = (s) => {
  let maxLen = 0,
    maxChar = '',
    startIndex = 0,
    currentLen = 0,
    currentChar = '',
    currentStart = 0;

  for (let i = 0; i < s.length; i++)
    if (/^[a-zA-Z0-9]$/.test(s[i]))
      if (s[i] === currentChar) currentLen++;
      else {
        if (currentLen > maxLen) {
          maxLen = currentLen;
          maxChar = currentChar;
          startIndex = currentStart;
        }
        currentChar = s[i];
        currentLen = 1;
        currentStart = i;
      }
    else {
      if (currentLen > maxLen) {
        maxLen = currentLen;
        maxChar = currentChar;
        startIndex = currentStart;
      }
      currentLen = 0;
    }

  if (currentLen > maxLen) {
    maxLen = currentLen;
    maxChar = currentChar;
    startIndex = currentStart;
  }

  const endIndex = startIndex + maxLen - 1;
  return [maxChar.charCodeAt(0).toString(), maxLen, [startIndex, endIndex]];
};
