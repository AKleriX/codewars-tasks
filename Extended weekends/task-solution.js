const solve = (a, b) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  let res = [null, null, 0];
  for (let i = a; i <= b; i++)
    for (let j of [0, 2, 4, 6, 7, 9, 11]) {
      let cDate = new Date(i, j, 1);
      if (cDate.getDay() === 5) {
        res[2]++;
        if (!res[0]) res[0] = months[j];
        res[1] = months[j];
      }
    }
  return res;
};
