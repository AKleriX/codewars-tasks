const fizzBuzzCustom = (stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) => [...Array(100)].map((_, i) => {
    let words = '';
    if (!((i + 1) % numOne))
      words += stringOne;
    if (!((i + 1) % numTwo))
      words += stringTwo;
    return words.length ? words : i + 1;
  });