const mutateMyStrings = (stringOne, stringTwo) => {
  let newStrOne = [...stringOne],
    res = [stringOne];
  for (let i = 0; i < stringTwo.length; i++)
    if (stringTwo[i] !== stringOne[i]) {
      newStrOne[i] = stringTwo[i];
      res.push(newStrOne.join(''));
    }
  return res.join('\n') + '\n';
};
