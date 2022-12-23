export const rakeGarden = (garden: string): string =>
  garden
    .split(' ')
    .map((el) => (el === 'rock' ? 'rock' : 'gravel'))
    .join(' ');
