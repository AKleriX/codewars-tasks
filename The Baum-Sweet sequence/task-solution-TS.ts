export function* baumSweet(): Generator<number, any, undefined> {
  for (let i = 0; true; i++)
    yield (i.toString(2).match(/0+/g) || []).some((s) => s.length % 2) && i > 0 ? 0 : 1;
}
