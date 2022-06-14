function numberGenerator() {
  let numbers = [];
  while (numbers.length < 6) {
    let num = getRandom(1, 49);
    if (!numbers.includes(num)) numbers.push(num);
  }
  return [...numbers.sort((a, b) => a - b), getRandom(0, 9)];
}

function checkForWinningCategory(checkCombination, winningCombination) {
  const winningCats = {
    '6 true': 1,
    '6 false': 2,
    '7 true': 3,
    '7 false': 4,
    '8 true': 5,
    '8 false': 6,
    '9 true': 7,
    '9 false': 8,
    '10 true': 9,
  };
  let superCom = checkCombination[6] === winningCombination[6],
    uniqNums = new Set(checkCombination.slice(0, 6).concat(winningCombination.slice(0, 6)));
  return winningCats[`${uniqNums.size} ${superCom}`]
    ? winningCats[`${uniqNums.size} ${superCom}`]
    : -1;
}

const getRandom = (min, max) => Math.round(Math.random() * (max - min)) + min;
