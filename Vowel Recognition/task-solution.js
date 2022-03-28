function vowelRecognition(input) {
  let counter = 0;
  for (let i = 0; i < input.length; i++)
    if (/[aeiou]/i.test(input[i])) counter += (i + 1) * (input.length - i);
  return counter;
}
