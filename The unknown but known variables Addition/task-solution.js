const theVar = (theVariables) => {
  const letters = theVariables.split('+');
  return letters.reduce((s, l) => s + l.charCodeAt() - 96, 0);
};
