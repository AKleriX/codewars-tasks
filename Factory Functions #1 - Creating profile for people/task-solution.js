function person(fN, lN, age, g, e, o, m) {
  return {
    firstName: fN,
    lastName: lN,
    age: age,
    gender: g,
    employed: e,
    occupation: o,
    married: m,
    sayName: () => `${fN} ${lN}`,
    introduce: () => `Hello, my name is ${fN + ' ' + lN}.  I am ${age} years old.  I am a ${g}.`,
  };
}
