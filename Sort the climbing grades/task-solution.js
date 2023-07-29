const sortGrades = (lst) =>
  [...lst]
    .map((l) => [l, l.slice(1) === 'B' ? -1 : l.slice(1) === '0+' ? 0.5 : +l.slice(1)])
    .sort((a, b) => a[1] - b[1])
    .map((l) => l[0]);
