function getCount(words) {
  let counter = { vowels: 0, consonants: 0 };
  if (typeof words !== 'string') return counter;
  counter.vowels = (words.match(/[aeoui]/gi) || []).length;
  counter.consonants = words.replace(/[^a-z]/gi, '').length - counter.vowels;
  return counter;
}
