const calculateScore = (cardsArr, wager) =>
  !wager && !cardsArr.length ? 0 : cardsArr.reduce((c, v) => c + v, -20) * ++wager;
