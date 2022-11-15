export function save(sizes: number[], hd: number) {
  let counter: number = 0;
  for (let i = 0; i < sizes.length && hd; i++)
    if (sizes[i] <= hd) {
      hd -= sizes[i];
      counter++;
    } else break;
  return counter;
}
