const abc = 'abcdefghijklmnopqrstuvwxyz';

function missingAlphabets(s) {
  let sortStr = s.split('').sort().join(''),     
      lettersInStr = sortStr.match(/(.)\1*/g),
      wordRepeat = lettersInStr.reduce((maxCount, letters) => maxCount > letters.length ? maxCount : letters.length, 0),
      currentAbc = '';   
  for (let i = 0; i < 26; i++)
    currentAbc += abc[i].repeat(wordRepeat);
  for (let j = 0; j < lettersInStr.length; j++)
    currentAbc = currentAbc.replace(lettersInStr[j],'');
  return currentAbc;
}