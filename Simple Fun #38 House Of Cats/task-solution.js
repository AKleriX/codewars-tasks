const houseOfCats = (legs) =>
  Array.from({ length: legs / 2 + 1 }, (_, i) => i).filter((n) => !((legs - n * 2) % 4));
