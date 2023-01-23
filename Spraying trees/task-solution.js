function task(w, n, c) {
  const dict = {
    Monday: 'James',
    Tuesday: 'John',
    Wednesday: 'Robert',
    Thursday: 'Michael',
    Friday: 'William',
  };
  return `It is ${w} today, ${dict[w]}, you have to work, you must spray ${n} trees and you need ${
    n * c
  } dollars to buy liquid`;
}
