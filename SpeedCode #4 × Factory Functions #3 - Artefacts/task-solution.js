const artefact = (name, age, location, status) => {
  let newObj = {
    name: name,
    age: age,
    location: location,
    status: status,
  };
  Object.freeze(newObj);
  return newObj;
};
