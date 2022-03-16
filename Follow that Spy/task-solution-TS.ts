export function findRoutes(routes: string[][]): string {
  let ways: string[] = [];
  for (let i = 0; i < routes.length; i++) {
    let startCounter = 0;
    for (let j = 0; j < routes.length; j++) if (routes[j][1] === routes[i][0]) startCounter++;
    if (!startCounter) {
      ways = [routes[i][0], routes[i][1]];
      break;
    }
  }
  while (ways.length !== routes.length + 1) {
    for (let i: number = 0; i < routes.length; i++)
      if (routes[i][0] === ways[ways.length - 1]) {
        ways.push(routes[i][1]);
        break;
      }
  }
  return ways.join(', ');
}
