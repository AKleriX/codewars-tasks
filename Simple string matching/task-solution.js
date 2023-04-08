function solve(a, b) {
  let astIdx = a.indexOf('*');
  return (
    (astIdx === -1 && a === b) ||
    (b.length >= a.length - 1 &&
      a.slice(0, astIdx) === b.slice(0, astIdx) &&
      b.endsWith(a.slice(astIdx + 1)))
  );
}
