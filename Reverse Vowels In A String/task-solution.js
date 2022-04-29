function reverseVowels(str) {
  let vowelsRev = str.match(/[aeoui]/gi);
  return vowelsRev ? str.replace(/[aeoui]/gi, (_) => vowelsRev.pop()) : str;
}
