const getLosAngelesPoints = (results) =>
  results.reduce((s, a) => s + (/^Los Angeles [a-zA-Z]+$/.test(a[0]) ? +a[1].split(':')[0] : 0), 0);
