export const trim = (str: string, size: number): string =>
  str.length <= size ? str : str.slice(0, size - (size <= 3 ? 0 : 3)) + '...';
