export function trafficLights(road: string, n: number): string[] {
  let res: string[] = [road],
    col: string[] = ['G', 'G', 'G', 'G', 'G', 'O', 'R', 'R', 'R', 'R', 'R'],
    colors: string[] = road.match(/G|O|R/g) || [],
    carPos: number = road.indexOf('C'),
    clearRoad: string = road.replace('C', '.');
  for (let i = 1; i <= n; i++) {
    let currentColors: string[] = colors.map((c) => col[(col.indexOf(c) + i) % col.length]),
      currentRoad: string[] = [...clearRoad],
      colorIdx: number = 0;
    currentRoad = currentRoad.map((p) => (/G|O|R/.test(p) ? currentColors[colorIdx++] : p));
    if (!/O|R/.test(currentRoad[carPos + 1])) carPos++;
    if (carPos < currentRoad.length) currentRoad[carPos] = 'C';
    res.push(currentRoad.join(''));
  }
  return res;
}
