const gymSlang = (phrase) => {
  const dict = {
    probably: 'prolly',
    'i am': "i'm",
    instagram: 'insta',
    'do not': "don't",
    'going to': 'gonna',
    combination: 'combo',
  };
  return phrase.replace(
    /(\b[Pp]robably\b|\b[Ii] am\b)|\b[Ii]nstagram\b|\b[Dd]o not\b|\b[Gg]oing to\b|\b[Cc]ombination\b/g,
    (p) => p[0] + dict[p.toLowerCase()].slice(1),
  );
};
