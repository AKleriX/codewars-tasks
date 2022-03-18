function countFeelings(string, array) {
  let sortString = [...string].sort(),
    feelingCounter = 0;
  for (let i = 0; i < array.length; i++) {
    let sortWord = [...array[i]].sort(),
      startIndex = 0,
      letterCounter = 0;
    for (let j = 0; j < sortWord.length; j++) {
      if (sortString.indexOf(sortWord[j], startIndex) !== -1) {
        startIndex = sortString.indexOf(sortWord[j], startIndex) + 1;
        letterCounter++;
      } else break;
    }
    if (letterCounter === sortWord.length) feelingCounter++;
  }
  return `${feelingCounter} feeling${feelingCounter !== 1 ? 's' : ''}.`;
}
