class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.rear++] = value;
  }

  dequeue() {
    if (this.front === this.rear) return undefined;
    const value = this.storage[this.front];
    delete this.storage[this.front++];
    return value;
  }

  size() {
    return this.rear - this.front;
  }
}
