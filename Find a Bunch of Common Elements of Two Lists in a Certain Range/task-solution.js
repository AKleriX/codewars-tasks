const findArr = (arrA, arrB, rng, wanted) => {
  const countOccurrences = (arr) => {
    const counts = {};
    arr.forEach((num) => (counts[num] = (counts[num] || 0) + 1));
    return counts;
  };

  const countA = countOccurrences(arrA),
    countB = countOccurrences(arrB),
    commonElements = Object.keys(countA)
      .filter((num) => countA[num] > 1 && countB[num] > 1)
      .map(Number),
    filteredElements = commonElements.filter((num) => {
      const inRange = num >= rng[0] && num <= rng[1],
        isWantedType = (wanted === 'odd' && num % 2 !== 0) || (wanted === 'even' && num % 2 === 0);
      return inRange && isWantedType;
    });

  return filteredElements.sort((a, b) => a - b);
};
