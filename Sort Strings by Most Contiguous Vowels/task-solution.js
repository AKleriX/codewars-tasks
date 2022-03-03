function sortStringsByVowels(strings){
  let results = [];  
  results = strings.map(str => {
    let maxLength = 0,
        currentLength = 0;
    for (let i = 0; i < str.length; i++){
      if (/a|e|i|o|u/i.test(str[i])) currentLength++;
      else {
        if (currentLength > maxLength) maxLength = currentLength;
        currentLength = 0;
      }
    }
    if (currentLength > maxLength) maxLength = currentLength;    
    return [str, maxLength];
  }).sort((a, b) => b[1] - a[1]).map(counter => counter[0]);
  return results;
}