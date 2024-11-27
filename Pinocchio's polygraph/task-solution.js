const extendPinocchioNose = (words) => {
  let wordArray = words.split(' ');
  for (let i = 0; i < wordArray.length - 1; i++)
    if (wordArray[i + 1].toLowerCase().includes(wordArray[i].toLowerCase())) return true;
  return false;
};
