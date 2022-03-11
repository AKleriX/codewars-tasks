export function isSortedAndHow(array: number[]): string {
  let ascSortArrStr: string = [...array].sort((a, b) => a - b).join(' '),
    defArrStr: string = array.join(' ');
  return ascSortArrStr === defArrStr
    ? 'yes, ascending'
    : ascSortArrStr.split(' ').reverse().join(' ') === defArrStr
    ? 'yes, descending'
    : 'no';
}
