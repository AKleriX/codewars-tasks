const validName = (array) =>
  !array.length
    ? 'You must test at least one name.'
    : array.length === 1
    ? 'Congratulations, you can choose any name you like!'
    : array.every((n, i, a) => !i || a[i - 1].slice(-1).toLowerCase() === n[0].toLowerCase())
    ? 'Congratulations, your baby names are compatible!'
    : 'Back to the drawing board, your baby names are not compatible.';
