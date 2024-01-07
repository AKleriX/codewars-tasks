const tableGame = (table) => {
  if (
    table[1][1] !== table[0][0] + table[0][2] + table[2][0] + table[2][2] ||
    table[0][1] !== table[0][0] + table[0][2] ||
    table[1][0] !== table[0][0] + table[2][0] ||
    table[1][2] !== table[0][2] + table[2][2] ||
    table[2][1] !== table[2][0] + table[2][2]
  )
    return [-1];
  return [table[0][0], table[0][2], table[2][0], table[2][2]];
};
