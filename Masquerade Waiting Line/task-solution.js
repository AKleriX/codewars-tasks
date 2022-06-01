function friendFind(line) {
  let counter = 0;
  for (let i = 0; i < line.length; i++)
    if (
      line[i] === 'red' &&
      ((line[i - 2] === 'blue' && line[i - 1] === 'blue') ||
        (line[i - 1] === 'blue' && line[i + 1] === 'blue') ||
        (line[i + 2] === 'blue' && line[i + 1] === 'blue'))
    )
      counter++;
  return counter;
}
