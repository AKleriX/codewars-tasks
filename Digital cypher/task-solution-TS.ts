export function encode(str: String, n: number): number[] {
  const abc: string = 'abcdefghijklmnopqrstuvwxyz';
  let nums: number[] = [...n.toString()].map(Number),
    cypher: number[] = [...str].map((l, i) => abc.indexOf(l) + 1 + nums[i % nums.length]);
  return cypher;
}
