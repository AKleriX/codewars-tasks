export function doubleton(num: number): number {
  while (new Set((++num).toString()).size !== 2);
  return num;
}
