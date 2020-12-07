/**
 * 链式栈实现
 * api: push, pop, clear, display
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null; 
    }
}

class StackBasedOnLinkedList {
    constructor() {
        this.top = null;
    }
    // 向栈中添加一个元素
    push (element) {
        const node = new Node(element);
        if (!this.top) this.top = node;
        else {
            node.next = this.top
            this.top = node;
        }
    }
    // 从栈中移除一个元素
    pop () {
        if (!this.top) return -1;
        let value =  this.top.element;
        this.top = this.top.next;
        return value;
    }
    // 清空栈
    clear () {
        this.top = null;
    }
    // 展示栈中的元素
    display () {
        let current = this.top;
        while(current) {
            console.log(current.element);
            current = current.next;
        }
    }
}

module.exports = StackBasedOnLinkedList;