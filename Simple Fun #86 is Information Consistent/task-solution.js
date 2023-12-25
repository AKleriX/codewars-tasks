const isInformationConsistent = (evidences) => {
  const d = new Array(evidences[0].length).fill(0);
  for (let i = 0; i < evidences.length; i++)
    for (let j = 0; j < evidences[i].length; j++)
      if (!d[j]) d[j] = evidences[i][j];
      else if (d[j] !== evidences[i][j] && evidences[i][j]) return false;
  return true;
};
