const obtRhtAct = (sideLen) => {
  const sortedSides = [...sideLen].sort((a, b) => a - b);
  if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) return -1;
  if (
    sortedSides[0] ** 2 + sortedSides[1] ** 2 < sortedSides[2] ** 2 &&
    sortedSides[0] ** 2 + sortedSides[1] ** 2 > sortedSides[2] ** 2 / 2
  )
    return 0;
  if (
    sortedSides[0] ** 2 + sortedSides[1] ** 2 > sortedSides[2] ** 2 &&
    sortedSides[0] ** 2 + sortedSides[2] ** 2 > sortedSides[1] ** 2 &&
    sortedSides[1] ** 2 + sortedSides[2] ** 2 > sortedSides[0] ** 2
  )
    return 2;
  return 1;
};
