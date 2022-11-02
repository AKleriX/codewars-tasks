function catchThief(queue) {
  let counter = 0,
    queArr = [...queue];
  for (let i = 0; i < queArr.length; i++) {
    if (/\d/.test(queArr[i])) {
      let dist = +queArr[i];
      for (let j = i - dist >= 0 ? i - dist : 0; j <= i + dist && j < queArr.length; j++)
        if (queArr[j] === 'X') {
          queArr[j] = '#';
          counter++;
        }
    }
  }
  return counter;
}
