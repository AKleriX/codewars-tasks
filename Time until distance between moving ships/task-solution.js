const findTimeToBreak = (bA, bB) => {
  if (bA === bB) return Infinity;
  return +((Math.sqrt(800 / (1 - Math.cos(((bA - bB) / 180) * Math.PI))) / 90) * 60).toFixed(2);
};
