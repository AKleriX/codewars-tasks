function setReducer(input) {
  let newArr = [],
    counter = 1;
  for (let i = 1; i < input.length; i++)
    if (input[i] === input[i - 1]) counter++;
    else {
      newArr.push(counter);
      counter = 1;
    }
  newArr.push(counter);
  return newArr.length === 1 ? newArr[0] : setReducer(newArr);
}
