const censorThis = (text, forbiddenWords) =>
  text
    .split(' ')
    .map((w) => (forbiddenWords.includes(w.toLowerCase()) ? '*'.repeat(w.length) : w))
    .join(' ');
