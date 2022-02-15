function pigLatin(string){
  let lowerString = string.toLowerCase(),
      pigWord = '';
  if (/^[aioeu]/.test(lowerString))
    pigWord = lowerString + 'way';
  else 
    for (let i = 0; i < lowerString.length; i++)
      if (/[aioeu]/.test(lowerString[i])){
        pigWord = lowerString.slice(i) + pigWord + 'ay';
        break;
      }
  else pigWord += i === lowerString.length - 1 ? lowerString[i] + 'ay' : lowerString[i]; 
  return /[^a-z]/g.test(pigWord) ? null : pigWord;
}