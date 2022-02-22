function anagramCounter (wordsArray) {
  let counter = 0;
  for (let i = 0; i < wordsArray.length - 1; i++){
    let currentWord = [...wordsArray[i]].sort().join('');
    for (let j = i + 1; j < wordsArray.length; j++)
      if (currentWord === [...wordsArray[j]].sort().join(''))
        counter++;
  }
  return counter;
}