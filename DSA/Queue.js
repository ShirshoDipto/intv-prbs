class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(item) {
    this.items[this.back] = item;
    this.back++;
  }

  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.front === this.back;
  }

  peek() {
    return this.items[this.front];
  }

  entries() {
    return this.items;
  }

  get size() {
    return this.back - this.front;
  }
}

const queue = new Queue();
console.log(queue.enqueue(7));
console.log(queue.enqueue(2));
console.log(queue.enqueue(6));
console.log(queue.enqueue(4));
console.log(queue.dequeue());
console.log(queue.peek());
const items = queue.entries();
console.log(items);
console.log("size", queue.size);
