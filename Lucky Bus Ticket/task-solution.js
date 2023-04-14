const isLucky = (ticket) =>
  ticket.length === 6 &&
  [...ticket.slice(0, 3)].reduce(getSum, 0) === [...ticket.slice(3)].reduce(getSum, 0);

const getSum = (sum, digit) => sum + +digit;
