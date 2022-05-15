function cycle(dir, arr, cur) {
  let move = dir % arr.length,
    idx = arr.indexOf(cur);
  if (idx === -1) return null;
  return arr[idx + move < 0 ? arr.length + (idx + move) : (idx + move) % arr.length];
}
