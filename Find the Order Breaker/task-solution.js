function orderBreaker(input) {
  let breaker = [];
  for (let i = 0; i < input.length; i++)
    if (
      (i === input.length - 1 && input[i] < input[i - 1]) ||
      (i === 0 && input[i] > input[i + 1]) ||
      (i > 0 &&
        i < input.length - 1 &&
        input[i - 1] < input[i + 1] &&
        (input[i] > input[i + 1] || input[i] < input[i - 1]))
    ) {
      breaker = [input[i], i];
      break;
    }
  return breaker[0];
}
