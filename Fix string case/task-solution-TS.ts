export function solve(s: string): string {
  let lowerCounter = 0,
      upperCounter = 0;
  for (let i = 0; i < s.length; i++)
    if (s[i].toUpperCase() === s[i]) upperCounter++;
    else lowerCounter++;
  return upperCounter > lowerCounter ? s.toUpperCase() : s.toLowerCase();
}