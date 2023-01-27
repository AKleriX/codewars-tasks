function testResult(array) {
  let counter = { h: 0, a: 0, l: 0 },
    average = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 8) counter.h++;
    else if (array[i] > 6) counter.a++;
    else counter.l++;
    average += array[i];
  }
  return counter.h === array.length
    ? [Math.round((average / array.length) * 1000) / 1000, counter, 'They did well']
    : [Math.round((average / array.length) * 1000) / 1000, counter];
}
