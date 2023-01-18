function histogram(results) {
  let str = '';
  for (let i = 0; i < results.length; i++)
    str = i + 1 + '|' + '#'.repeat(results[i]) + (results[i] ? ' ' + results[i] : '') + '\n' + str;
  return str.slice(0);
}
