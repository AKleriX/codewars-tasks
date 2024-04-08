const landPerimeter = (arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr[i].length; j++)
      if (arr[i][j] === 'X')
        counter +=
          4 -
          (+(arr[i][j - 1] === 'X') +
            +((arr[i - 1] || [])[j] === 'X') +
            +((arr[i + 1] || [])[j] === 'X') +
            +(arr[i][j + 1] === 'X'));
  return `Total land perimeter: ${counter}`;
};
