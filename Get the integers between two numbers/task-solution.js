const range = (startNum, endNum) =>
  Array.from({ length: endNum - startNum - 1 }, (_, i) => i + startNum + 1);
