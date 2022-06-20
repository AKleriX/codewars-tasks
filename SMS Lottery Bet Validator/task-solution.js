function validateBet(game, text) {
  if (/[^ \d,]/g.test(text)) return null;
  let nums = text.split(/,| /).filter((n) => n !== '');
  if (
    new Set(nums).size !== nums.length ||
    nums.length !== game[0] ||
    nums.some((n) => n > game[1] || n < 1)
  )
    return null;
  return nums.map(Number).sort((a, b) => a - b);
}
