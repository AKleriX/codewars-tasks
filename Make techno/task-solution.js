const perc = (mins) => {
  if (typeof mins !== 'number' || mins < 1 || mins > 100) return 'invalid track time';
  const b = mins * 120;
  return [
    `${Math.round((b / 4) * 4)} kicks`,
    `${Math.round((b / 4) * 8)} hihats`,
    `${Math.round((b / 4) * 2)} claps`,
  ];
};
