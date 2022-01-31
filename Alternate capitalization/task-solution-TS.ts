export function capitalize(s: string): string[] {
  let switchCases: string[] = ['', ''];
  for (let i = 0; i < s.length; i++)
    if (!(i % 2)) [switchCases[0], switchCases[1]] = [switchCases[0] + s[i].toUpperCase(), switchCases[1] + s[i]];
    else [switchCases[0], switchCases[1]] = [switchCases[0] + s[i], switchCases[1] + s[i].toUpperCase()];
  return switchCases;
}