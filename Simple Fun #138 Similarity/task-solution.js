const similarity = (a, b) => {
  const B = new Set(b);
  return a.filter((el) => B.has(el)).length / Array.from(new Set([...a, ...b])).length;
};
