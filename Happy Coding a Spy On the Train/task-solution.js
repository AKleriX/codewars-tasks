const lengthOfRailway = (sounds) => {
  let speed = 0,
    distance = 0;
  for (let i = 0; i < sounds.length; i++)
    if (sounds.slice(i, i + 3) === '呜呜呜') {
      speed = speed ? 0 : 1;
      i += 2;
    } else if (sounds.slice(i, i + 2) === '哐当') {
      distance += speed ? 20 : 10;
      i += 1;
    }
  return distance;
};
