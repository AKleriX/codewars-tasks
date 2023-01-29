export function generate(length: number): string {
  let pop: string = '';
  for (let i = 0; i < length; i++) pop += Math.floor(Math.random() * 2).toString();
  return pop;
}
