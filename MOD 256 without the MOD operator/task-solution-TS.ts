export const mod256WithoutMod = (n: number): number => Math.sign(n) * (Math.abs(n) & 255);
