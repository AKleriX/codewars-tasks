function ranking(people) {
  const sortedPoints = people.map((p) => p.points).sort((a, b) => b - a);
  return [...people]
    .sort((a, b) => (a.points === b.points ? a.name.localeCompare(b.name) : b.points - a.points))
    .map((p) => ((p.position = sortedPoints.indexOf(p.points) + 1), p));
}
