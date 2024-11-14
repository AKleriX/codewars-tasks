const bangStartString = (s, history) => {
  const lines = history.trim().split('\n');
  for (let i = lines.length - 1; i >= 0; i--) {
    const command = lines[i].replace(/^\s*\d+\s*/, '');
    if (command.startsWith(s)) return command;
  }
  return `!${s}: event not found`;
};
