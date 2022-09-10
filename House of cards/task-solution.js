function houseOfCards(floors) {
  let minCards = 7;
  for (let i = 2; i <= floors; i++) minCards += i + (i + 1) * 2;
  if (typeof floors !== 'number' || floors % 1 || floors < 1) throw new Error('invalid input');
  return minCards;
}
