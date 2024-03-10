const change = (name, items, payment) => {
  const counter = items.reduce((p, c) => p - c, payment);
  return +(name !== 'John' ? counter : counter < 0 ? 0 : 2 * counter - Math.floor(counter)).toFixed(
    2,
  );
};
