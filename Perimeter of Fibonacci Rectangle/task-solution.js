const perimeter = (n) => {
  let current = 1n,
    next = 1n;
  for (let i = 0; i < n; i++) [next, current] = [current + next, next];
  return (current + next) * 2n;
};
