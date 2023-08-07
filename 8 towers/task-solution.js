const towerCombination = (n) => (n === 1 ? 1 : n * towerCombination(n - 1));
