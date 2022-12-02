function well(x) {
  let goodCounter = 0;
  for (let i = 0; i < x.length; i++)
    for (let j = 0; j < x[i].length; j++) if (/good/i.test(x[i][j])) goodCounter++;
  return !goodCounter ? 'Fail!' : goodCounter > 2 ? 'I smell a series!' : 'Publish!';
}
