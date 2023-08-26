const numKeyStrokes = (text) => {
  let counter = 0;
  for (let i = 0; i < text.length; i++)
    if (/[A-Z]/.test(text[i]) || '~!@#$%^&*()_+{}|":?><'.includes(text[i])) counter += 2;
    else counter++;
  return counter;
};
