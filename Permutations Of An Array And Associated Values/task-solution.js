const sscForperm = (arr) => {
  const permutations = permuteUnique(arr);
  let totalPerm = permutations.length,
    totalSsc = 0,
    maxSsc = -Infinity,
    minSsc = Infinity;

  for (const perm of permutations) {
    let ssc = calcSsc(perm);
    totalSsc += ssc;
    maxSsc = Math.max(maxSsc, ssc);
    minSsc = Math.min(minSsc, ssc);
  }

  return [
    { 'total perm': totalPerm },
    { 'total ssc': totalSsc },
    { 'max ssc': maxSsc },
    { 'min ssc': minSsc },
  ];
};

const calcSsc = (perm) => perm.reduce((sum, val, idx) => sum + val * (idx + 1), 0);

const permuteUnique = (arr) => {
  const results = [];

  const permute = (array, start) => {
    if (start === array.length - 1) {
      results.push([...array]);
      return;
    }

    const seen = new Set();
    for (let i = start; i < array.length; i++)
      if (!seen.has(array[i])) {
        seen.add(array[i]);
        [array[start], array[i]] = [array[i], array[start]];
        permute(array, start + 1);
        [array[start], array[i]] = [array[i], array[start]];
      }
  };

  permute(arr, 0);
  return results;
};
