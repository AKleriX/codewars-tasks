function negationValue(string, value) {
  value = value ? true : false;
  for (let i = 0; i < string.length; i++) value = !value;
  return value;
}
