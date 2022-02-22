function addedChar(s1, s2){
  let sortS1 = [...s1].sort().join(''),
      sortS2 = [...s2].sort().join(''),
      addChar = '';
  for (let i = 0; i < sortS2.length; i++)
    if (sortS1[i] !== sortS2[i]) {
      addChar = sortS2[i];
      break;
    }
  return addChar;
}