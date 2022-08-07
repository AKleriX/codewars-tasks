function bangN(n, history) {
  let commands = history.split('\n');
  return n > commands.length
    ? `!${n}: event not found`
    : commands[n - 1].slice(commands[n - 1].match(new RegExp(n)).index + (n + '').length).trim();
}
