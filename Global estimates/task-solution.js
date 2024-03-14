const globalEstimate = (estimates) => {
  let theBestCase = 0,
    theWorstCase = 0;
  for (let i = 0; i < estimates.length; i++)
    [theBestCase, theWorstCase] = [theBestCase + estimates[i][0], theWorstCase + estimates[i][1]];
  return [theBestCase, (theBestCase + theWorstCase) / 2, theWorstCase];
};
