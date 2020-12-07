/**
 * 基于链表实现的循环队列
 * api: enqueue, dequeue
 */
class Node {
    constructor (element) {
        this.element = element;
        this.next = null;
    }
}

class CircularQueueBasedOnLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }
    enqueue (value) {
        if (!this.head) {
            // 队空
            this.head = new Node(value);
            this.head.next = this.head;
            this.tail = this.head;
        } else {
            const flag = this.head === this.tail;
            this.tail.next = new Node(value);
            this.tail = this.tail.next; 
            this.tail.next = this.head;
        }
    }
    dequeue () {
        if (!this.head) return -1;

        if (this.head === this.tail) {
            let value = this.head.element;
            this.head = null;
            this.tail = null;
            return value;
        } else {
            let value = this.head.element;
            this.head = this.head.next;
            this.tail.next = this.head;
            return value;
        }
    }

    display () {
        let res = 0;
        while(res != -1) {
            res = this.dequeue();
            console.log(res);
        }
    }
}

const queue = new CircularQueueBasedOnLinkedList();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.display();
queue.enqueue(1);
queue.display();
