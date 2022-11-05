const hydrate = (s) => {
  let counter = (s.match(/\d+/g) || []).reduce((sum, num) => sum + +num, 0);
  return `${counter} glass${counter !== 1 ? 'es' : ''} of water`;
};
