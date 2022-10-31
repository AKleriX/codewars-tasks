const getAverageAge = (list) =>
  Math.round(list.reduce((sum, data) => sum + data.age, 0) / list.length);
