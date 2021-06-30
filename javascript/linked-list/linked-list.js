class ListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  pop() {
    if (!this.head) {
      return;
    }
    const popped = this.tail;
    const newTail = this.tail.prev;

    if (newTail) {
      newTail.next = null;
      this.tail.prev = null;
    } else {
      this.head = null;
    }

    this.tail = newTail;

    return popped.value;
  }

  shift() {
    if (!this.head) {
      return;
    }
    const shifted = this.head;
    const newHead = this.head.next; 
    if (this.head !== this.tail) {
      newHead.prev = null;
      shifted.next = null;
    } else {
      this.tail = null;
    }
    this.head = newHead;

    return shifted.value;
  }

  unshift(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    let deleted = this.head;
    while (deleted) {
      if (deleted.value === value) {
        if (deleted.prev === null) {
          this.shift();
          return;
        } else if (deleted.next === null) {
          this.pop();
          return;
        }
        deleted.prev.next = deleted.next;
        deleted.next.prev = deleted.prev;
        return;
      } else {
        deleted = deleted.next;
      }
    }
  }

  count() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}

/* This link was very helpful:
https://betterprogramming.pub/singly-and-doubly-linked-lists-in-javascript-7515f47c9f60 */
