function findHack(arr) {
  return arr.filter((student) => isWrong(student)).map((student) => student[0]);
}

const isWrong = (data) => {
  const points = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };
  let allAAndB = true,
    counter = 0;
  for (let i = 0; i < data[2].length; i++) {
    if (!/A|B/.test(data[2][i])) allAAndB = false;
    counter += points[data[2][i]] ? points[data[2][i]] : 0;
  }
  if (allAAndB && data[2].length > 4) counter += 20;
  return data[1] > 200 || data[1] !== counter;
};
