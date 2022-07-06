function threeAmigos(numbers) {
  let bestThree = [],
    minRange = Infinity;
  for (let i = 0; i <= numbers.length - 3; i++) {
    let tmpThree = numbers.slice(i, i + 3),
      oddNums = tmpThree.filter((n) => n % 2),
      range = Math.max.apply(null, tmpThree) - Math.min.apply(null, tmpThree);
    if ((!oddNums.length || oddNums.length === 3) && minRange > range) {
      minRange = range;
      bestThree = tmpThree;
    }
  }
  return bestThree;
}
