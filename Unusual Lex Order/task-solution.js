const unusualLexOrder = (arr) =>
  [...arr].sort((a, b) =>
    a.endsWith(b)
      ? 1
      : b.endsWith(a)
      ? -1
      : [...a]
          .reverse()
          .join('')
          .localeCompare([...b].reverse().join('')),
  );
