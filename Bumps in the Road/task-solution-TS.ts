export function bump(x: string): string {
  let bumps: string[] = x.match(/n/g) || [];
  return bumps.length > 15 ? 'Car Dead' : 'Woohoo!';
}
