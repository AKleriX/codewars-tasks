const typeOfTriangle = function (sideA, sideB, sideC) {
  let sides = new Set([sideA, sideB, sideC]);
  if (
    typeof sideA !== 'number' ||
    typeof sideB !== 'number' ||
    typeof sideC !== 'number' ||
    sideA + sideB <= sideC ||
    sideA + sideC <= sideB ||
    sideC + sideB <= sideA
  )
    return 'Not a valid triangle';
  return sides.size === 1 ? 'Equilateral' : sides.size === 2 ? 'Isosceles' : 'Scalene';
};
