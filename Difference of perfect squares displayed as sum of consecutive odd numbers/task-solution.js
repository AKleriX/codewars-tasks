const squaresToOdd = (sqr1, sqr2) => {
  const difference = sqr1 - sqr2;
  let result = `${sqr1}^2 - ${sqr2}^2 = `,
    sum = 0;
  for (let i = 0; i < difference; i++) {
    const odd = sqr2 * 2 + 1 + i * 2;
    sum += odd;
    result += i === 0 ? odd : ` + ${odd}`;
  }
  return result + ` = ${sum}`;
};
