/**
 * 链式队列
 * api: enqueue, dequeue
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class QueueBasedLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }
    // 入队
    enqueue (element) {
        if (!this.head) {
            this.head = new Node(element);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(element);
            this.tail = this.tail.next;
        }
    }

    // 出队
    dequeue () {
        if (!this.head) return -1;
        else {
            let value = this.head.element;
            this.head = this.head.next;
            return value;
        }
    }
    display () {
        let res = 0;
        while (res != -1) {
            res = this.dequeue();
            console.log(res);
        }
    }
}

/**
 * test cases
 */
const queue = new QueueBasedLinkedList();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();