const LT = (lt) => (eq) => (gt) => lt;
const EQ = (lt) => (eq) => (gt) => eq;
const GT = (lt) => (eq) => (gt) => gt;

// do not change this function //
function compare(x, y) {
  if (x < y) return LT;
  else if (x > y) return GT;
  else return EQ;
}

function sorted([...xs]) {
  return xs.sort((a, b) => compare(a, b)(-1)(1)(0));
}

function maximum(xs) {
  return xs.reduce((accumulator, currentValue) =>
    compare(accumulator, currentValue)(currentValue)(currentValue)(accumulator),
  );
}

const UNIT = (val) => val;

const RED = (red) => (orange) => (yellow) => (green) => (blue) => (purple) => red;
const ORANGE = (red) => (orange) => (yellow) => (green) => (blue) => (purple) => orange;
const YELLOW = (red) => (orange) => (yellow) => (green) => (blue) => (purple) => yellow;
const GREEN = (red) => (orange) => (yellow) => (green) => (blue) => (purple) => green;
const BLUE = (red) => (orange) => (yellow) => (green) => (blue) => (purple) => blue;
const PURPLE = (red) => (orange) => (yellow) => (green) => (blue) => (purple) => purple;
