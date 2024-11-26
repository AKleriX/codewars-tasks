const findCharacters = (matrix) => {
  const counts = {},
    chars = matrix.replace(/\n/g, '');

  for (const char of chars) counts[char] = (counts[char] || 0) + 1;

  const minCount = Math.min(...Object.values(counts)),
    result = Object.keys(counts)
      .filter((char) => counts[char] === minCount)
      .sort((a, b) => {
        if (
          (a.match(/[A-Z]/) && b.match(/[A-Z]/)) ||
          (a.match(/[a-z]/) && b.match(/[a-z]/)) ||
          (a.match(/\d/) && b.match(/\d/))
        )
          return a.localeCompare(b);
        if (a.match(/[A-Z]/)) return -1;
        if (b.match(/[A-Z]/)) return 1;
        if (a.match(/[a-z]/)) return -1;
        if (b.match(/[a-z]/)) return 1;
        return 0;
      })
      .join('');

  return result;
};
