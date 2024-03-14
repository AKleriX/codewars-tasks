let sorted = 0;

const sort = (array) => {
  // Mark function as called through the global variable
  sorted = 1;

  // Transform the input data
  for (let i = 0; i < array.length; i++) {
    array[i] = 3 * array[i] + 2;
  }

  // Remove middle value
  let n = array.length,
    mid = Math.floor(n / 2);
  array = array.slice(0, mid).concat(array.slice(mid + 1));

  // Sort the array
  let s = false;
  for (let i = array.length - 1; i >= 0 && !s; i--) {
    s = true;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        s = false;
      }
    }
  }

  return array;
};
