const comfortableWord = (word) => {
  const hand = ['qwertasdfgzxcvb', 'yuiophjklnm'];
  let currentHand = hand[0].includes(word[0]) ? 0 : 1;
  for (let i = 0; i < word.length; i++) {
    if (!hand[currentHand].includes(word[i])) return false;
    currentHand = +!currentHand;
  }
  return true;
};
