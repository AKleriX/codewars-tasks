const companyBotStrategy = (trainingData) => {
  let correct = trainingData.filter((v) => v[1] === 1);
  return correct.reduce((s, v) => s + v[0], 0) / correct.length || 0;
};
