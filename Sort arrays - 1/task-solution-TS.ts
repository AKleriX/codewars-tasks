export function sortMe(names: string[]): string[] {
  function mergeSort(arr: string[]): string[] {
    if (arr.length === 1) return arr;
    let firstHalf: string[] = mergeSort(arr.slice(0, (arr.length / 2) | 0)),
      secondHalf: string[] = mergeSort(arr.slice((arr.length / 2) | 0)),
      sortArr: string[] = [];
    while (firstHalf.length || secondHalf.length)
      if (firstHalf[0] && (!secondHalf.length || firstHalf[0] < secondHalf[0])) {
        sortArr.push(firstHalf[0]);
        firstHalf.splice(0, 1);
      } else {
        sortArr.push(secondHalf[0]);
        secondHalf.splice(0, 1);
      }
    return sortArr;
  }
  return mergeSort(names);
}
