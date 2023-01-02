const ownedCatAndDog = function (catYears, dogYears) {
  return [getAge('cat', catYears), getAge('dog', dogYears)];
};

const getAge = (pet, years) => {
  let age = 0;
  while (years > 0) {
    if (age < 1) years -= 15;
    else if (age < 2) years -= 9;
    else years -= pet === 'cat' ? 4 : 5;
    if (years >= 0) age++;
  }
  return age;
};
