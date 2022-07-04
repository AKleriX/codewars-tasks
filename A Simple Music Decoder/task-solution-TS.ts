export function uncompress(music: string): number[] {
  let com: string[] = music.split(','),
    decode: number[] = [];
  for (let i = 0; i < com.length; i++) {
    if (/^(-?\d+)-(-?\d+)(\/(\d+))?$/.test(com[i])) {
      let [start, end, int] = com[i]
        .replace(
          /^(-?\d+)-(-?\d+)(\/(\d+))?$/,
          (_, p1, p2, p3) => p1 + ' ' + p2 + (p3 ? ' ' + p3.slice(1) : ''),
        )
        .split(' ')
        .map(Number);
      if (!int) int = 1;
      for (let j = start; j !== end; j += end < start ? -int : int) decode.push(j);
      decode.push(end);
    } else if (com[i].includes('*')) {
      let [num, c] = com[i].replace(/\*/g, ' ').split(' ').map(Number);
      decode = decode.concat(new Array(c).fill(num));
    } else decode.push(+com[i]);
  }
  return decode;
}
