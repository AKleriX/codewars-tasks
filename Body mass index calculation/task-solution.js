const calculateBmi = (weight, height) => {
  const bmi = weight / (height / 100) ** 2,
    category = DATA.find(([from, to]) => bmi >= from && bmi < to)[2];
  return { value: bmi.toFixed(1), category };
};
