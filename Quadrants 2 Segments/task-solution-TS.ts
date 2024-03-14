class Coord {
  x: number;
  y: number;
}

export const quadrantSegment = (A: Coord, B: Coord): boolean =>
  Math.sign(A.x) !== Math.sign(B.x) || Math.sign(A.y) !== Math.sign(B.y);
