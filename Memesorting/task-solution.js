const memesorting = (meme) => {
  const categories = [
    { name: 'Roma', key: 'bug' },
    { name: 'Maxim', key: 'boom' },
    { name: 'Danik', key: 'edits' },
    { name: 'Vlad', key: '' },
  ];

  meme = meme.toLowerCase();

  let earliestMatch = { name: 'Vlad', position: Infinity };

  for (const { name, key } of categories) {
    if (key === '') continue;

    const position = findEarliestMatch(meme, key);
    if (position !== -1 && position < earliestMatch.position) earliestMatch = { name, position };
  }

  return earliestMatch.name;
};

const findEarliestMatch = (text, key) => {
  let index = 0;
  for (const char of key) {
    index = text.indexOf(char, index);
    if (index === -1) return -1;
    index++;
  }
  return index - key.length;
};
