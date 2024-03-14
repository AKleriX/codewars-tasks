const nextBirthdayOfTheWeek = (birthday) => {
  const dayOfWeek = birthday.getDay();
  let counter = 0;
  do {
    birthday.setYear(birthday.getFullYear() + 1);
    counter++;
  } while (birthday.getDay() !== dayOfWeek);
  return counter;
};
