function trafficLights(road, n) {
  let res = [road],
    col = ['G', 'G', 'G', 'G', 'G', 'O', 'R', 'R', 'R', 'R', 'R'],
    colors = road.match(/G|O|R/g) || [],
    carPos = road.indexOf('C'),
    clearRoad = road.replace('C', '.');
  for (let i = 1; i <= n; i++) {
    let currentColors = colors.map((c) => col[(col.indexOf(c) + i) % col.length]),
      currentRoad = [...clearRoad],
      colorIdx = 0;
    currentRoad = currentRoad.map((p) => (/G|O|R/.test(p) ? currentColors[colorIdx++] : p));
    if (!/O|R/.test(currentRoad[carPos + 1])) carPos++;
    if (carPos < currentRoad.length) currentRoad[carPos] = 'C';
    res.push(currentRoad.join(''));
  }
  return res;
}
