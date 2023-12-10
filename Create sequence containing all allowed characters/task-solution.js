const createSequence = (regex) => {
  const seq = [];
  for (let i = 32; i <= 126; i++)
    if (regex.test(String.fromCharCode(i))) seq.push(String.fromCharCode(i));
  return seq.join('');
};
