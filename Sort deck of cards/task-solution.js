function sortCards(array) {
  const dict = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K'];
  return [...array].sort((a, b) => dict.indexOf(a) - dict.indexOf(b));
}
