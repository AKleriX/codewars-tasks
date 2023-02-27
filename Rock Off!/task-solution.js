function solve(a, b) {
  let scoreA = 0,
    scoreB = 0;
  for (let i = 0; i < 3; i++)
    if (a[i] > b[i]) scoreA++;
    else if (a[i] < b[i]) scoreB++;
  return `${scoreA}, ${scoreB}: ${
    scoreA === scoreB
      ? 'that looks like a "draw"! Rock on!'
      : scoreA > scoreB
      ? 'Alice made "Kurt" proud!'
      : 'Bob made "Jeff" proud!'
  }`;
}
