const evilCodeMedal = (...times) => {
  times = ['User', 'Gold', 'Silver', 'Bronze']
    .map((p, i) => [
      times[i].split(':').reduce((s, c, j) => s + c * (!j ? 3600 : j === 1 ? 60 : 1), 0),
      p,
    ])
    .sort((a, b) => (a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0] - b[0]))
    .map((t) => t[1]);
  return ['Gold', 'Silver', 'Bronze', 'None'][times.indexOf('User')];
};
