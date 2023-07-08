export const toIndustrial = (time: number | string): number =>
  Math.round(
    ((typeof time === 'number'
      ? time
      : time
          .split(':')
          .reduce((s: number, t: string, i: number): number => (i ? s + +t : +t * 60), 0)) /
      60) *
      100,
  ) / 100;

export const toNormal = (time: number): string => {
  const mins: number = time * 60;
  return `${(mins / 60) | 0}:${Math.round(mins % 60)
    .toString()
    .padStart(2, '0')}`;
};
