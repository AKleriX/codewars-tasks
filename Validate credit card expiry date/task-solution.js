const checkExpiryValid = (date) => {
  const [m, y] = date.match(/\d+/g).map(Number),
    currentDate = new Date();
  return y < 100
    ? y > currentDate.getFullYear() % 100 ||
        (y === currentDate.getFullYear() % 100 && m >= currentDate.getMonth() + 1)
    : y > currentDate.getFullYear() ||
        (y === currentDate.getFullYear() && m >= currentDate.getMonth() + 1);
};
