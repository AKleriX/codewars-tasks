const getMostFrequent = (json) => {
  return json.temperature.map((day) => {
    const frequency = {};
    let mostFrequent = null;

    day.forEach((temp) => {
      frequency[temp] = (frequency[temp] || 0) + 1;
    });

    day.forEach((temp) => {
      if (
        mostFrequent === null ||
        frequency[temp] > frequency[mostFrequent] ||
        (frequency[temp] === frequency[mostFrequent] &&
          day.lastIndexOf(temp) > day.lastIndexOf(mostFrequent))
      ) {
        mostFrequent = temp;
      }
    });

    return mostFrequent;
  });
};
