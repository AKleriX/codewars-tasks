function getFirstPython(list) {
  let pythonDev = list.find((data) => data.language === 'Python');
  pythonDev;
  return pythonDev
    ? `${pythonDev.firstName}, ${pythonDev.country}`
    : 'There will be no Python developers';
}
