function longestPalindrome(str) {
  let oddCounter = 0,
    maxLen = 0,
    lowerStr = str.toLowerCase(),
    lettersCounter = {};
  for (let i = 0; i < lowerStr.length; i++)
    if (/[a-z0-9]/i.test(lowerStr[i]))
      lettersCounter[lowerStr[i]] = lettersCounter[lowerStr[i]]
        ? lettersCounter[lowerStr[i]] + 1
        : 1;
  for (let s in lettersCounter)
    if (lettersCounter[s] % 2) maxLen += lettersCounter[s] - (oddCounter++ ? 1 : 0);
    else maxLen += lettersCounter[s];
  return maxLen;
}
