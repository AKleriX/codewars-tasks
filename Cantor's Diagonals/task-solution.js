const cantor = (nestedList) => {
  const res = [];
  for (let i = 0; i < nestedList.length; i++) res.push(+!nestedList[i][i]);
  return res;
};
