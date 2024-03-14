const convert = (time) => {
  const strTime = time.toJSON();
  return strTime.slice(strTime.indexOf('T') + 1, -1).replace('.', ',');
};
