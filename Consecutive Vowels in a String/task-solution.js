function getTheVowels(word) {
  let vowels = 'aeiou'.repeat(word.length),
    vowelsPos = 0,
    counter = 0;
  for (let i = 0; i < word.length; i++)
    if (vowels[vowelsPos] === word[i]) {
      counter++;
      vowelsPos++;
    }
  return counter;
}
