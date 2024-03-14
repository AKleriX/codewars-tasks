export const draw = (deck: string[]): string[] => {
  const drawnCards: string[] = [],
    cDeck: string[] = [...deck];
  let i: number = 0;
  while (cDeck.length > 0) {
    if (!(i++ % 2)) drawnCards.push(cDeck[0]);
    else cDeck.push(cDeck[0]);
    cDeck.shift();
  }
  return drawnCards;
};
