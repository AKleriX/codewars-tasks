const generate = (length) => {
  let pop = '';
  for (let i = 0; i < length; i++) pop += Math.floor(Math.random() * 2);
  return pop;
};
