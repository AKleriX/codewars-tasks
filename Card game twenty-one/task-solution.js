const twentyOne = (card1, card2, card3) => {
  const score = getScore(card1) + getScore(card2) + getScore(card3);
  return score > 21 ? 'more' : score < 21 ? 'less' : 'twenty-one';
};

const getScore = (card) =>
  +card.slice(0, -1)
    ? +card.slice(0, -1)
    : card[0] === 'J'
    ? 2
    : card[0] === 'Q'
    ? 3
    : card[0] === 'K'
    ? 4
    : 11;
