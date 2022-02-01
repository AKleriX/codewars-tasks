const countDevelopers = (list) =>
  list.reduce(
    (counter, dev) =>
      dev.continent === 'Europe' && dev.language === 'JavaScript' ? counter + 1 : counter,
    0,
  );
