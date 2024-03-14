export const time = (distance: number, boatSpeed: number, stream: String): number => {
  const [dir, stSpeed] = stream.split(' ');
  return dir === 'Downstream'
    ? +(distance / (boatSpeed + +stSpeed)).toFixed(2)
    : +(distance / (boatSpeed - +stSpeed)).toFixed(2);
};
