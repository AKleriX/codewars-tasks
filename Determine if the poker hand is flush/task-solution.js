function isFlush(cards) {
  let suits = new Set();
  for (let i = 0; i < cards.length; i++) suits.add([...cards[i]].pop());
  return suits.size === 1;
}
