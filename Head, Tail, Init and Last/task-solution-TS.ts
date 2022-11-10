export const head = (arr: number[]): number => arr[0];

export const last = (arr: number[]): number => arr[arr.length - 1];

export const tail = (arr: number[]): number[] => arr.slice(1);

export const init = (arr: number[]): number[] => arr.slice(0, -1);