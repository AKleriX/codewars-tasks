export function sortVowels(str?: number | string | null): string {
  return typeof str === 'string'
    ? [...str].map((l) => (/[aeiou]/i.test(l) ? '|' + l : l + '|')).join('\n')
    : '';
}
