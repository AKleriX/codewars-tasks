function arrAdder(arr) {
  let words = [];
  for (let i = 0; i < arr[0].length; i++) {
    let word = '';
    for (let j = 0; j < arr.length; j++) word += arr[j][i];
    words.push(word);
  }
  return words.join(' ');
}
