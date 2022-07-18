function groupAnagrams(words) {
  let anagrams = {};
  for (let i = 0; i < words.length; i++) {
    let sortLetters = [...words[i]].sort().join('');
    anagrams[sortLetters] = anagrams[sortLetters]
      ? anagrams[sortLetters].concat([words[i]])
      : [words[i]];
  }
  return Object.values(anagrams);
}
