function NamedOne(first, last) {
  return {
    firstName: first,
    lastName: last,
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      if (name.split(' ').length === 2){
        this.firstName = name.split(' ')[0];
        this.lastName = name.split(' ')[1];
      }
    }
  }
}