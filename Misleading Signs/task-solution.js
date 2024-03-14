const gaslighting = (shirtWord, yourWord, friendsLetters) =>
  [...shirtWord].some(
    (l, i) =>
      l !== yourWord[i] && (friendsLetters.includes(l) || friendsLetters.includes(yourWord[i])),
  );
