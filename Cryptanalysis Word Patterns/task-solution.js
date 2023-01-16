function wordPattern(word) {
  let sIdx = {},
    pattern = [];
  for (let i = 0, c = 0; i < word.length; i++) {
    if (!sIdx.hasOwnProperty(word[i].toLowerCase())) sIdx[word[i].toLowerCase()] = c++;
    pattern.push(sIdx[word[i].toLowerCase()]);
  }
  return pattern.join('.');
}
