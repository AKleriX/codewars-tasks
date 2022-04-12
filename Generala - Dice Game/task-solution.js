function points(dice) {
  let dices = new Set(dice);
  if (dices.size === 1) return 50;
  if (dices.size === 2) {
    if (isPoker(dice)) return 40;
    return 30;
  }
  if (dices.size === 5 && isStraight(dice)) return 20;
  return 0;
}

const isPoker = (dice) => {
  let rolls = [...dice].sort((a, b) => +a - +b).join('');
  return /(.)\1{3}/.test(rolls);
};

const isStraight = (dice) => {
  let rolls = [...dice].sort((a, b) => +a - +b).join('');
  return /(12345)|(23456)|(13456)/.test(rolls);
};
