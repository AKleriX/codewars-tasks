const minRepeatingCharacterDifference = (text) => {
  let map = new Map(),
    minDiff = Infinity,
    result = null;
  for (let i = 0; i < text.length; i++) {
    if (map.has(text[i])) {
      let diff = i - map.get(text[i]);
      if (diff < minDiff) {
        minDiff = diff;
        result = [minDiff, text[i]];
      }
    }
    map.set(text[i], i);
  }
  return result;
};
