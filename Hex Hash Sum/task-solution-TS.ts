export const hexHash = (code: string): number =>
  [...[...code].map((s) => s.charCodeAt(0).toString(16).replace(/\D/g, '')).join('')].reduce(
    (s, n) => s + +n,
    0,
  );
