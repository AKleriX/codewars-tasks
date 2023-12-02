const freedPrisoners = (prison) => {
  let currentCells = [...prison],
    counter = 0,
    pos = 0;
  if (currentCells[pos]) {
    counter++;
    currentCells = currentCells.map((s) => !s);
    while (currentCells.slice(pos + 1).includes(true)) {
      counter++;
      pos = currentCells.indexOf(true, pos + 1);
      currentCells = currentCells.map((s) => !s);
    }
  }
  return counter;
};
