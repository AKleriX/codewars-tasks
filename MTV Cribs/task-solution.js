function myCrib(n) {
  let house = [];
  for (let i = 0; i < n; i++)
    house.push(' '.repeat(n - i) + '/' + ' '.repeat(i * 2) + '\\' + ' '.repeat(n - i));
  house.push('/' + '_'.repeat(n * 2) + '\\');
  for (let i = 0; i < n - 1; i++) house.push('|' + ' '.repeat(n * 2) + '|');
  house.push('|' + '_'.repeat(n * 2) + '|');
  return house.join('\n');
}
