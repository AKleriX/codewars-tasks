const scratch = (lottery) => {
  let total = 0;

  for (let entry of lottery) {
    let parts = entry.split(' '),
      prize = parts.pop(),
      uniqueAnimals = new Set(parts);

    if (uniqueAnimals.size === 1 || (uniqueAnimals.size === 2 && uniqueAnimals.has('###')))
      total += prize === '###' ? 10000 : +prize;
  }

  return total;
};
