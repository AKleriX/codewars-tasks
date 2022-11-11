export function lastSurvivor(letters: string, coords: number[]): string {
  let currentLets: string[] = [...letters];
  for (let i = 0; i < coords.length; i++)
    currentLets = currentLets.filter((_, j) => j !== coords[i]);
  return currentLets.join('');
}
