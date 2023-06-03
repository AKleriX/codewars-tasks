const countAnimals = (animals, count) =>
  count.map((a) => (animals.match(new RegExp(a, 'g')) || []).length);
