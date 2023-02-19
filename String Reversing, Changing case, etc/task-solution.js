const reverseAndMirror = (s1, s2) => {
  return (
    [...s2].reverse().map(getRevCase).join('') +
    '@@@' +
    [...s1].reverse().map(getRevCase).join('') +
    [...s1].map(getRevCase).join('')
  );
};

const getRevCase = (s) => (s.toUpperCase() === s ? s.toLowerCase() : s.toUpperCase());
