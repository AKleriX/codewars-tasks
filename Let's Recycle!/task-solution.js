function recycle(array) {
  const materialsIndex = {
    paper: 0,
    glass: 1,
    organic: 2,
    plastic: 3,
  };
  let bins = [[], [], [], []];
  for (let i = 0; i < array.length; i++) {
    bins[materialsIndex[array[i].material]].push(array[i].type);
    if (array[i].hasOwnProperty('secondMaterial'))
      bins[materialsIndex[array[i].secondMaterial]].push(array[i].type);
  }
  return bins;
}
