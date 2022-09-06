export const mirror = (obj: Record<string, any>): Record<string, string> => {
  let currentObj: { [key: string]: string } = {};
  for (let i in obj) currentObj[i] = [...i].reverse().join('');
  return currentObj;
};
