const cardGame = (card1, card2, trump) => {
  if (card1 === 'joker' && card2 === 'joker') return 'Someone cheats.';

  if (card1 === 'joker') return 'The first card won.';
  if (card2 === 'joker') return 'The second card won.';

  const suit1 = card1.slice(-1),
    suit2 = card2.slice(-1);

  if (card1 === card2) return 'Someone cheats.';

  if (suit1 === suit2) {
    return getCardValue(card1) > getCardValue(card2)
      ? 'The first card won.'
      : 'The second card won.';
  }

  if (suit1 === trump && suit2 !== trump) return 'The first card won.';
  if (suit2 === trump && suit1 !== trump) return 'The second card won.';

  return 'Let us play again.';
};

const getCardValue = (card) => deck.indexOf(card);
