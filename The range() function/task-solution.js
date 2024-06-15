const range = (start, stop, step = 1) => {
  if (stop === undefined) [start, stop] = [0, start];
  if (!step) return Array(Math.abs(stop - start)).fill(start);
  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) return [];

  const res = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) res.push(i);

  return res;
};
