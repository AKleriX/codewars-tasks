const oracle = (gestures) => {
  const dict = {
      scissors: 'rock',
      rock: 'paper',
      paper: 'scissors',
    },
    counter = [];

  for (let i in dict) {
    let newGes = gestures.filter((g) => g !== dict[i]);
    if (newGes.filter((g) => g === i).length > newGes.filter((g) => g !== i).length)
      counter.push(dict[i]);
  }

  return counter.length ? counter.join('/') : 'tie';
};
