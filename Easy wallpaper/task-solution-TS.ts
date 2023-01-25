export function wallpaper(l: number, w: number, h: number): string {
  const numbers: string[] = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ];
  let rolls: number = Math.ceil(((l * 2 + w * 2) * h * 1.15) / 5.2);
  return numbers[l * w * h ? rolls : 0];
}
