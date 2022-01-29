function remember(str) {
  let letterCount = new Map(),
      repLetters = [];
  for (let i = 0; i < str.length; i++)
    if (letterCount.has(str[i]) && letterCount.get(str[i])){
      repLetters.push(str[i]);
      letterCount.set(str[i], false);
    }
    else if (!letterCount.has(str[i])) letterCount.set(str[i], true);
  return repLetters;  
}