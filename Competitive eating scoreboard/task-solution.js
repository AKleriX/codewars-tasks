const scoreboard = (whoAteWhat) =>
  whoAteWhat
    .map((o) => ({ name: o.name, score: o.chickenwings * 5 + o.hamburgers * 3 + o.hotdogs * 2 }))
    .sort((a, b) => (a.score === b.score ? a.name.localeCompare(b.name) : b.score - a.score));
