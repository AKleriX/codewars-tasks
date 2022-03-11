function isSortedAndHow(array) {
  let ascSortArrStr = [...array].sort((a, b) => a - b).join(' '),
    defArrStr = array.join(' ');
  return ascSortArrStr === defArrStr
    ? 'yes, ascending'
    : ascSortArrStr.split(' ').reverse().join(' ') === defArrStr
    ? 'yes, descending'
    : 'no';
}
