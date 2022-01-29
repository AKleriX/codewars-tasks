export function checkExam(array1: string[], array2: string[]): number {
  let score: number = array1.reduce((sum: number, ans: string, i: number): number => array2[i] === ans ? sum + 4 : 
                                                                                    (array2[i] === '' ? sum : sum - 1), 0);
  return score < 0 ? 0 : score;
}