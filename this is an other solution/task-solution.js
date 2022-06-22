function OnceNamedOne(first, last) {
  let obj = {
    firstName: first,
    lastName: last,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  Object.defineProperty(obj, 'firstName', { writable: false });
  Object.defineProperty(obj, 'lastName', { writable: false });
  return obj;
}
