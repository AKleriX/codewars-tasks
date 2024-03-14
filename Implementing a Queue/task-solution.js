class Queue {
  constructor() {
    this.q = [];
  }

  enqueue(v) {
    return this.q.push(v);
  }

  dequeue() {
    return this.q.shift();
  }

  size() {
    return this.q.length;
  }
}
