function fridayTheThirteenths(start, end = start) {
  let fridaysArr = [];
  for (let i = start; i <= end; i++)
    for (let j = 0; j < 12; j++) {
      let weekDay = new Date(i, j, 13).getDay();
      if (weekDay === 5) fridaysArr.push(`${j + 1}/13/${i}`);
    }
  return fridaysArr.join(' ');
}
