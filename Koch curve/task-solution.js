const kochCurve = (n) => {
  if (!n) return [];
  let next = kochCurve(--n);
  return [...next, 60, ...next, -120, ...next, 60, ...next];
};
