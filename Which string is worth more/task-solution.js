function highestValue(a, b) {
  const scoreA = [...a].reduce((s, el) => s + el.charCodeAt(0), 0),
    scoreB = [...b].reduce((s, el) => s + el.charCodeAt(0), 0);
  return scoreA < scoreB ? b : a;
}
