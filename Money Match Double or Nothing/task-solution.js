const doubleOrNothing = (cash, wager, losses) => {
  while (--losses) wager *= 2;
  return cash - wager >= 0 ? cash - wager : "I'll pay you back later";
};
