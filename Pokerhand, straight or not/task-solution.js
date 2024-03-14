// return true/false if the given cards make up a straight
const isStraight = (cards) => {
  let counter = 0;
  const sortCards = [...cards].sort((a, b) => a - b);
  if (sortCards[sortCards.length - 1] === 14) sortCards.unshift(1);
  for (let i = 1; i < sortCards.length; i++)
    if (sortCards[i - 1] + 1 === sortCards[i]) {
      if (++counter === 4) break;
    } else counter = sortCards[i - 1] === sortCards[i] ? counter : 0;
  return counter === 4;
};
