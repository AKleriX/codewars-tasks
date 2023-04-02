export function countSalutes(hallway: String): number {
  let sum: number = 0,
    right: number = 0;
  for (let i = 0; i < hallway.length; i++)
    if (hallway[i] === '>') right++;
    else if (hallway[i] === '<') sum += 2 * right;
  return sum;
}
