function keywordCipher(string, keyword) {
  let abc = 'abcdefghijklmnopqrstuvwxyz',
    key = Array.from(new Set(keyword + abc));
  return string.toLowerCase().replace(/[a-z]/g, (l) => key[abc.indexOf(l)]);
}
