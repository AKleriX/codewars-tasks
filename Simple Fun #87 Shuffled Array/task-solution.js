function shuffledArray(shuffled) {
  let sum = shuffled.reduce((s, n) => s + n),
    arr = [...shuffled];
  for (let i = 0; i < shuffled.length; i++)
    if (sum - shuffled[i] === shuffled[i]) {
      arr.splice(i, 1);
      break;
    }
  return arr.sort((a, b) => a - b);
}
