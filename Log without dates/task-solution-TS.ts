export const checkLogs = (log: string[]): number =>
  log.reduce((d, t, i, arr) => (i ? d + Number(t <= arr[i - 1]) : d), 1);
