export type inputMan = {
  name: string;
  points: number;
};

export type outputMan = {
  name: string;
  points: number;
  position: number;
};

export function ranking(people: inputMan[]): outputMan[] {
  const sortedPoints: number[] = people.map((p) => p.points).sort((a, b) => b - a),
    sortedInput: inputMan[] = [...people].sort((a, b) =>
      a.points === b.points ? a.name.localeCompare(b.name) : b.points - a.points,
    );
  let res: outputMan[] = [];
  for (let i = 0; i < sortedInput.length; i++)
    res.push({ ...sortedInput[i], position: sortedPoints.indexOf(sortedInput[i].points) + 1 });
  return res;
}
