const createTwoSetsOfEqualSum = (n) => {
  const total = (n * (n + 1)) / 2;

  if (total % 2 !== 0) return [];

  const target = total / 2,
    set1 = [],
    set2 = [];
  let current = 0;

  for (let i = n; i > 0; i--)
    if (current + i <= target) {
      set1.push(i);
      current += i;
    } else set2.push(i);

  return [set1, set2];
};
