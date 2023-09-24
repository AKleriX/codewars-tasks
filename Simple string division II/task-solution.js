const solve = (s, k) => {
  const d = s.split(' ');
  let counter = 0;
  for (let i = 0; i < d.length; i++)
    for (let j = i + 1; j < d.length; j++) {
      if (!(+(d[i] + d[j]) % k)) counter++;
      if (!(+(d[j] + d[i]) % k)) counter++;
    }
  return counter;
};
