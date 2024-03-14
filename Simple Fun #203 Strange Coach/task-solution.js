const strangeCoach = (players) => {
  const counter = players.reduce((c, p) => ((c[p[0]] = (c[p[0]] || 0) + 1), c), {});
  return (
    Object.keys(counter)
      .filter((l) => counter[l] > 4)
      .sort()
      .join('') || 'forfeit'
  );
};
