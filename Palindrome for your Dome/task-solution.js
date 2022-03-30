function palindrome(string) {
  let clearLetters = string.replace(/[^a-z]/gi, '').toLowerCase();
  for (let i = 0; i < clearLetters.length / 2; i++)
    if (clearLetters[i] !== clearLetters[clearLetters.length - i - 1]) return false;
  return true;
}
