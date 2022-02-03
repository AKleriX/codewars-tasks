function scramble(str1, str2) {
  let lettersStr1 = {};
  for (let i = 0; i < str1.length; i++){
    if (!lettersStr1.hasOwnProperty(str1[i]))
      lettersStr1[str1[i]] = 0;
    lettersStr1[str1[i]]++;
  }
  for (let j = 0; j < str2.length; j++){
    if (!lettersStr1.hasOwnProperty(str2[j]) || !lettersStr1[str2[j]]) 
      return false;
    lettersStr1[str2[j]]--;
  }
  return true;
}