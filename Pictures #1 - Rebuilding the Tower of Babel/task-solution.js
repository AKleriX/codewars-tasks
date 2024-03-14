const babel = (height) => {
  const res = [];
  for (let i = 1; i <= height; i++)
    res.push((' '.repeat(height - i) + 'o'.repeat(1 + (i - 1) * 2) + '\n').repeat(3));
  return res.join('').slice(0, -1);
};
