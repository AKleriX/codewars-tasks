const hungryFoxes = function (farm) {
  let cages = (farm.match(/\[[.CF]*\]/g) || []).map((c) =>
      c.includes('F') ? c.replace(/C/g, '.') : c,
    ),
    free = farm.split(/\[[.CF]*\]/g).join('\n');
  if (free.includes('F')) free = free.replace(/C/g, '.');
  return free.split('\n').reduce((f, c, i) => f + c + (cages[i] ? cages[i] : ''), '');
};
