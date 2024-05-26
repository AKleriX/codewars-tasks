const surfsUp = (waves) => {
  const res = [];
  for (let i = 0; i < waves.length; i++)
    if (i < waves.length - 1 && waves[i] > 7 && waves[i] < 11) {
      res.push(waves[i]);
      break;
    } else if (i === waves.length - 1 && waves[i] < 11) res.push(waves[i]);
  return res.length
    ? res[0] < 9
      ? [res[0], 'Johnny rides']
      : [res[0], 'Johnny falls']
    : ['Johnny waits'];
};
