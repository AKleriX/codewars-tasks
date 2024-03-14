const quadrantSegment = (A, B) =>
  Math.sign(A.x) !== Math.sign(B.x) || Math.sign(A.y) !== Math.sign(B.y);
