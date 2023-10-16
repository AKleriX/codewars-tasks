const headSmash = (array) =>
  (typeof array === 'string' && !array.length) || (Array.isArray(array) && !array.length)
    ? 'Gym is empty'
    : !Array.isArray(array) || array.some((el) => typeof el === 'number')
    ? "This isn't the gym!!"
    : array.map((s) => s.replace(/O/g, ' '));
