const winner = (candidates) => {
  if (!Array.isArray(candidates) || candidates.length !== 3) return false;

  let best = null;

  for (let i = 0; i < candidates.length; i++) {
    let { name, scores } = candidates[i];

    if (
      typeof name !== 'string' ||
      !Array.isArray(scores) ||
      scores.length < 1 ||
      scores.length > 2
    )
      return false;

    if (scores.some((s) => typeof s !== 'number' || s % 5 !== 0 || s < 5 || s > 100)) return false;

    let sum = scores.reduce((a, b) => a + b, 0);
    if (sum > 100) continue;

    if (!best || sum > best.sum) best = { name, sum, order: i };
  }

  return best ? best.name : false;
};
