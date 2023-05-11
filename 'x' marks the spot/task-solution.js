const xMarksTheSpot = (input) => {
  let cords = [];
  for (let i = 0; i < input.length; i++)
    for (let j = 0; j < input[i].length; j++)
      if (input[i][j] === 'x') {
        if (cords.length > 0) {
          cords = [];
          break;
        }
        cords = [i, j];
      }
  return cords;
};
