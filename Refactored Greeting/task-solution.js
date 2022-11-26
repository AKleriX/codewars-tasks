class Person {
  constructor(name) {
    this.name = name;
  }

  greet(gName) {
    return `Hello ${gName}, my name is ${this.name}`;
  }
}
