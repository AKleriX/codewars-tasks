export function runningPace(distance: number, time: string): string {
  let v =
      distance /
      time
        .split(':')
        .map(Number)
        .reduce((m: number, s: number) => +m * 60 + +s),
    t: number = 1 / v;
  return Math.floor(t / 60).toString() + ':' + addZero(Math.floor(t % 60));
}

const addZero = (n: number) => (n < 10 ? '0' + n : n.toString());
