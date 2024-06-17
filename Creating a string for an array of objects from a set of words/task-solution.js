const wordsToObject = (input) => {
  const p = input.split(' '),
    res = [];

  for (let i = 0; i < p.length; i += 2) {
    const name = p[i],
      id = p[i + 1];
    res.push(`{name : '${name}', id : '${id}'}`);
  }

  return `[${res.join(', ')}]`;
};
