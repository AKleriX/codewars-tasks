const rotateMatrix = (arr) =>
  Array.from({ length: arr[0].length }, (_, i) => arr.map((r) => r[i])).reverse();
