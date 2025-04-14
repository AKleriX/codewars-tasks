const topScores = (records, nTop) => {
  if (nTop <= 0) return [];
  const best = {};
  for (const [name, score] of records)
    if (!(name in best) || score > best[name]) best[name] = score;
  return Object.entries(best)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, nTop);
};
