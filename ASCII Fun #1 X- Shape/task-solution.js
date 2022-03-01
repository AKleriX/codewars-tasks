const x = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      if (i === j || i === n - j - 1) row += '■';
      else row += '□';
    }
    arr.push(row);
  }
  return arr.join('\n');
};
