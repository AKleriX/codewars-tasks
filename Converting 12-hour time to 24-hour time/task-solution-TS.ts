export const to24hourtime = (hour: number, minute: number, period: string): string => {
  const h: string = period === 'am' ? (hour % 12).toString() : ((hour % 12) + 12).toString();
  return h.padStart(2, '0') + minute.toString().padStart(2, '0');
};
