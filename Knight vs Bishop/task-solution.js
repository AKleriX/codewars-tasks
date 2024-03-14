const knightVsBishop = (knightPosition, bishopPosition) => {
  let dX = Math.abs(knightPosition[1].charCodeAt(0) - bishopPosition[1].charCodeAt(0)),
    dY = Math.abs(knightPosition[0] - bishopPosition[0]);
  return !(dX - dY)
    ? 'Bishop'
    : (dX === 2 && dY === 1) || (dX === 1 && dY === 2)
    ? 'Knight'
    : 'None';
};
