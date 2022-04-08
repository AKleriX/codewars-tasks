function wordPattern(pattern, str) {
  let patternCounter = {},
    words = str.split(' '),
    useWord = new Set();
  for (let i = 0; i < pattern.length; i++)
    if (!patternCounter.hasOwnProperty(pattern[i]))
      if (useWord.has(words[i])) return false;
      else {
        patternCounter[pattern[i]] = words[i];
        useWord.add(words[i]);
      }
    else if (patternCounter[pattern[i]] !== words[i]) return false;
  return true;
}
