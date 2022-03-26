const tourney = (array) => {
  let currentArr = [...array],
    tournament = [[...currentArr]];
  while (tournament[tournament.length - 1].length > 1) {
    let newArr = [];
    if (currentArr.length % 2) newArr.push(currentArr[currentArr.length - 1]);
    for (let i = 0; i < currentArr.length - 1; i += 2)
      if (currentArr[i] > currentArr[i + 1]) newArr.push(currentArr[i]);
      else newArr.push(currentArr[i + 1]);
    currentArr = newArr;
    tournament.push(currentArr);
  }
  return tournament;
};
