function capitalize(s, arr) {
  let arrLetters = [...s];
  for (let i = 0; i < arr.length; i++)
    if (arr[i] >= 0 && arr[i] < s.length) arrLetters[arr[i]] = arrLetters[arr[i]].toUpperCase();
  return arrLetters.join('');
}
