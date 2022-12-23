const rakeGarden = (garden) =>
  garden
    .split(' ')
    .map((el) => (el === 'gravel' || el === 'rock' ? el : 'gravel'))
    .join(' ');
