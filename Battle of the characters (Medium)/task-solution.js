function battle(x, y) {
  let firstPower = [...x].reduce(getPower, 0),
    secondPower = [...y].reduce(getPower, 0);
  return firstPower > secondPower ? x : firstPower < secondPower ? y : 'Tie!';
}

const getPower = (power, letter) =>
  power + (letter.toUpperCase().charCodeAt(0) - 64) / (letter === letter.toUpperCase() ? 1 : 2);
