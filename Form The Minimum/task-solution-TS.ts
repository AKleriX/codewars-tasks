export const minValue = (values: number[]): number => Number(Array.from(new Set(values)).sort((a, b) => a - b).join(''));