const detectInt = (...lambdas) => {
  for (let i = 1; ; i++) if (lambdas.every((lambda) => lambda(i))) return i;
  return null;
};
