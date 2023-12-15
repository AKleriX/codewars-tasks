const partyPeople = (party) => {
  const sortArr = [...party].sort((a, b) => b - a);
  let counter = 0;

  for (let i = 0; i < sortArr.length; i++)
    if (sortArr[i] <= counter + sortArr.length - i) counter++;

  return counter;
};
