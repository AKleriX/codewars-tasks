const separateTypes = (input) =>
  input.reduce((d, el) => (d[typeof el] ? d[typeof el].push(el) : (d[typeof el] = [el]), d), {});
