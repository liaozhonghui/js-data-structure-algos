/**
 * 单链表的实现
 * api: append, insert, remove, findByValue, findByIndex, display
 */

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = new Node('head');
    }
    // 像链表末尾添加节点
    append (element) {
        const node = new Node(element);
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
    // 在指定位置插入节点
    insert (newElement, element) {
        const node = this.findByValue(element)
        if (node === -1) return;
        const insertNode = new Node(newElement);
        insertNode.next = node.next;
        node.next = insertNode;
    }
    // 移除指定的节点
    remove (element) {
        let prevNode = this.findPrev(element);
        if (prevNode === -1) return false;
        prevNode.next = prevNode.next.next;
    }
    // 展示所有的列表元素
    display () {
        let current = this.head.next;
        while(current) {
            console.log(current);
            current = current.next;
        }
    }
    // 查询指定元素的节点
    findByValue(element) {
        let current = this.head.next;
        if (!current) return -1;
        while (current) {
            if (current.element === element) return current;
            else current = current.next;
        }
        return -1;
    }
    // 查找指定元素的前一个节点
    findPrev (element) {
        let current = this.head;
        while(current.next != null && current.next.element != element) {
            current = current.next;
        }
        if (current.next === null) {return -1;}
        return current;
    }
    // 根据Index查找节点，下标从0开始
    findByIndex (index) {
        let current = this.head;
        let count = -1;
        while(current && count < index) {
            current = current.next;
            count++;
        }
        return count === index ? current : -1;
    }
}