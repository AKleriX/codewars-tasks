function permuteAPalindrome (input) { 
  let lettersCounter = input.split('').reduce((counter, l) => {
    if (!counter.hasOwnProperty(l)) counter[l] = 0;
    counter[l]++;
    return counter;
  }, {}),
      oddsCounter = 0;
  for (let letter in lettersCounter)
    if(lettersCounter[letter] % 2) oddsCounter++;  
  return oddsCounter <= 1;  
}