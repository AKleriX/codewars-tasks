function palindromize(number) {
  let counter = 0;
  while (number.toString() !== [...number.toString()].reverse().join('')) {
    number += +[...number.toString()].reverse().join('');
    counter++;
  }
  return `${counter} ${number}`;
}
