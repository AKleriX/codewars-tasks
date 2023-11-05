const draw = (deck) => {
  const drawnCards = [],
    cDeck = [...deck];
  let i = 0;
  while (cDeck.length)
    if (!(i++ % 2)) drawnCards.push(cDeck.shift());
    else cDeck.push(cDeck.shift());
  return drawnCards;
};
