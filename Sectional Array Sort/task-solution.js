function sectSort(arr, start, len = arr.length) {
  if (!len) len = arr.length;
  return arr.slice(0, start).concat(
    arr.slice(start, len + start).sort((a, b) => a - b),
    arr.slice(len + start),
  );
}
