export function evaporator(content: number, evapPerDay: number, threshold: number): number {
  let daysCounter: number = 0,
      minContent: number = (threshold / 100) * content;
  while (content > minContent){
    content -= content * (evapPerDay / 100);
    daysCounter++;
  }
  return daysCounter;
}