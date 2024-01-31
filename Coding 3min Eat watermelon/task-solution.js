const sc = (watermelon) => {
  let [c1, c2, c3, c4] = [0, 0, 0, 0];
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++)
      if (i < 4 && j < 4 && watermelon[i][j]) c1++;
      else if (i < 4 && j > 3 && watermelon[i][j]) c2++;
      else if (i > 3 && j > 3 && watermelon[i][j]) c3++;
      else if (watermelon[i][j]) c4++;
  return (c1 > 5 ? c1 : 0) + (c2 > 5 ? c2 : 0) + (c3 > 5 ? c3 : 0) + (c4 > 5 ? c4 : 0);
};
