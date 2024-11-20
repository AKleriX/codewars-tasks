const cardsAndPero = (s) => {
  const suits = { P: new Set(), K: new Set(), H: new Set(), T: new Set() };

  for (let i = 0; i < s.length; i += 3) {
    const card = s.slice(i, i + 3),
      suit = card[0],
      number = card.slice(1);

    if (suits[suit].has(number)) return [-1, -1, -1, -1];
    suits[suit].add(number);
  }

  return ['P', 'K', 'H', 'T'].map((suit) => 13 - suits[suit].size);
};
