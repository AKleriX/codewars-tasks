const knightVsKing = (knightPosition, kingPosition) => {
  let abc = ' ABCDEFGH',
    knP = [knightPosition[0], abc.indexOf(knightPosition[1])],
    kiP = [kingPosition[0], abc.indexOf(kingPosition[1])];
  if (
    ((knP[0] + 2 === kiP[0] || knP[0] - 2 === kiP[0]) &&
      (knP[1] + 1 === kiP[1] || knP[1] - 1 === kiP[1])) ||
    ((knP[1] + 2 === kiP[1] || knP[1] - 2 === kiP[1]) &&
      (knP[0] + 1 === kiP[0] || knP[0] - 1 === kiP[0]))
  )
    return 'Knight';
  if (Math.abs(knP[0] - kiP[0]) < 2 && Math.abs(knP[1] - kiP[1]) < 2) return 'King';
  return 'None';
};
