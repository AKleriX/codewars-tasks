const findHobbitsIn = (manifest) => {
  const keywords = ['halfling', 'hobbit', 'shire', 'farthing', 'hobbiton'];
  return manifest.filter((entry) => {
    const race = (entry.race || '').toLowerCase(),
      home = (entry.home || '').toLowerCase();
    return keywords.some((k) => race.includes(k) || home.includes(k));
  });
};
