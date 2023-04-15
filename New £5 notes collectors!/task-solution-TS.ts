export const getNewNotes = (salary: number, bills: number[]): number =>
  Math.max(0, Math.floor((salary - bills.reduce((s, b) => b + s, 0)) / 5));
