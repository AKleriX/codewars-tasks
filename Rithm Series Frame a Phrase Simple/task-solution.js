const frame = (phrase, ch = '*') => {
  const frame = [];
  for (let i = 0; i < (phrase.length ? 5 : 4); i++)
    frame.push(
      !i || i === (phrase.length ? 4 : 3)
        ? ch.repeat(4 + phrase.length)
        : i === 2
        ? ch + ' ' + phrase + ' ' + ch
        : ch + ' '.repeat(2 + phrase.length) + ch,
    );
  return frame.join('\n');
};
