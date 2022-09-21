export const getEvenNumbers = (numbersArray: number[]): number[] => {
  return numbersArray.filter((n) => !(n % 2));
};
