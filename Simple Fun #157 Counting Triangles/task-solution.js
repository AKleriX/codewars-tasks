const countingTriangles = (V) => {
  let counter = 0;
  for (let i = 0; i < V.length - 2; i++)
    for (let j = i + 1; j < V.length - 1; j++)
      for (let k = j + 1; k < V.length; k++)
        if (V[i] + V[j] > V[k] && V[i] + V[k] > V[j] && V[j] + V[k] > V[i]) counter++;
  return counter;
};
