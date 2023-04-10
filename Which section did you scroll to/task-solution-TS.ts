export function getSectionId(scrollY: number, sizes: number[]) {
  let i: number = 0;
  for (; i < sizes.length && scrollY >= 0; i++) scrollY -= sizes[i];
  return scrollY >= 0 ? -1 : i - 1;
}
