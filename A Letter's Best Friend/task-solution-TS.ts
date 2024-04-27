export const bestFriend = (txt: string, a: string, b: string): boolean =>
  [...txt].every((l, i, t) => l !== a || (l === a && t[i + 1] === b));
