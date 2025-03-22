const codewarResult = (codewarrior, opponent) => {
  const yourArmies = [...codewarrior].sort((a, b) => a - b),
    enemyArmies = [...opponent].sort((a, b) => a - b);

  let wins = 0,
    losses = 0;

  while (yourArmies.length) {
    if (yourArmies[yourArmies.length - 1] > enemyArmies[enemyArmies.length - 1]) {
      wins++;
      yourArmies.pop();
      enemyArmies.pop();
    } else if (yourArmies[0] > enemyArmies[0]) {
      wins++;
      yourArmies.shift();
      enemyArmies.shift();
    } else {
      if (yourArmies[0] < enemyArmies[enemyArmies.length - 1]) losses++;
      yourArmies.shift();
      enemyArmies.pop();
    }
  }

  if (wins > losses) return 'Victory';
  if (wins < losses) return 'Defeat';
  return 'Stalemate';
};
