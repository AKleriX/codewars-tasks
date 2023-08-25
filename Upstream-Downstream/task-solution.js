const time = (distance, boatSpeed, stream) => {
  const [dir, stSpeed] = stream.split(' ');
  return dir === 'Downstream'
    ? +(distance / (boatSpeed + +stSpeed)).toFixed(2)
    : +(distance / (boatSpeed - +stSpeed)).toFixed(2);
};
