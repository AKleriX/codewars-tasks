function loopArr(arr, direction, steps) {
  let newArr = [];
  switch (direction) {
    case 'left':
      newArr = arr.slice(steps).concat(arr.slice(0, steps));
      break;
    case 'right':
      newArr = arr.slice(-1 * steps).concat(arr.slice(0, -1 * steps));
      break;
  }
  return newArr;
}
