const arpeggio = (n) => {
  const notes = 'ABCDEFGABCDEFG';
  return notes.includes(n)
    ? [...notes.slice(notes.indexOf(n), notes.indexOf(n) + 9)].filter((_, i) =>
        [0, 2, 4, 7].includes(i),
      )
    : undefined;
};
