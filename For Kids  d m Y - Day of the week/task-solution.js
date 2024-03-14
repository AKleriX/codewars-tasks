const dayOfTheWeek = (date) => {
  const dates = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    [d, m, y] = date.split('/');
  return dates[new Date([m, d, y].join('-')).getDay()];
};
