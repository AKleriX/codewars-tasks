const rakeGarden = (garden) =>
  garden
    .split(' ')
    .map((el) => (el === 'grabel' || el === 'rock' ? el : 'gravel'))
    .join(' ');
