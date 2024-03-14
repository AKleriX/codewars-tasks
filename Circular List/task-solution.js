class CircularList {
  constructor(...args) {
    if (!args.length) throw new Error('Wrong input!');
    this.list = [...args];
    this.pos = -1;
  }

  next() {
    this.pos = (this.pos + 1) % this.list.length;
    return this.list[this.pos];
  }

  prev() {
    this.pos = this.pos < 1 ? this.list.length - 1 : this.pos - 1;
    return this.list[this.pos];
  }
}
