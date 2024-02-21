const manCave = (array) =>
  array.filter((m) => m.name === 'Raj').length
    ? array.filter((m) => m.gender === 'male').map((m) => ((m.status = 'Single'), m))
    : array;
