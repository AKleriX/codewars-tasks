function substring(str) {
  let counter = new Map(),
    left = 0,
    subStr = '';
  for (let right = 0; right < str.length; right++) {
    counter.set(str[right], !counter.get(str[right]) ? 1 : counter.get(str[right]) + 1);
    while (counter.size > 2) {
      if (counter.get(str[left]) > 1) counter.set(str[left], counter.get(str[left]) - 1);
      else counter.delete(str[left]);
      left++;
    }
    if (subStr.length < str.slice(left, right + 1).length) subStr = str.slice(left, right + 1);
  }
  return subStr;
}
