const naughtyOrNice = (data) => {
  let counter = 0;
  for (let m in data) for (let d in data[m]) counter += data[m][d] === 'Nice' ? 1 : -1;
  return counter < 0 ? 'Naughty!' : 'Nice!';
};
