function solve(s) {
  let vowels = (s.match(/[aeiou]/g) || []).sort(),
    cons = (s.match(/[^aeiou]/g) || []).sort(),
    resWord = [];
  if (vowels.length >= cons.length) resWord.push(vowels.shift());
  else resWord.push(cons.shift());
  for (let i = 1; i < s.length; i++)
    if (/[aeiou]/.test(resWord[i - 1]) && cons[0]) resWord.push(cons.shift());
    else if (/[^aeiou]/.test(resWord[i - 1]) && vowels[0]) resWord.push(vowels.shift());
    else return 'failed';
  return resWord.join('');
}
