function decode(str) {
  let result = [];
  for (let i = 0; i < str.length; i++)
    if (/\\/.test(str[i]) && /^\d+/.test(str.slice(i + 1))) {
      let j = i + 1;
      for (; /\d/.test(str[j]); j++);
      result.push(str.slice(j, j + +str.slice(i + 1, j)));
      i += +str.slice(i + 1, j) + j - i - 1;
    } else result.push(str[i]);
  return result;
}
