/**
 * 跳表实现
 * api: 
 * 1. boolean search(int target): 判断target是否存在跳表中
 * 2. void add(int num): 插入一个元素到跳表
 * 3. bool erase(int num): 在跳表中删除一个值，如果num不存在，直接返回false, 如果存在多个num,删除任意一个
 */

const MAX_LEVEL = 16;
class Node {
    constructor (data = -1, maxLevel = 0, refer = []) {
        this.data = data;
        this.maxLevel = maxLevel;
        this.refer = refer;
    }
}
class SkipList {
    constructor () {
        this.head = new Node();
        this.levelCount = 1;
    }
    // 随机生成level层级
    randomLevel () {
        let level = 1;
        for (let i = 0; i < level.length; i++) {
            if (Math.random() > 0.5) level++;
        }
        return level;
    }
    // 跳表中添加元素
    add (value) {
        // 插入到有序列表中，增加上层索引
        const level = this.randomLevel();
        const newNode = new Node(value, level);
        const update = new Array(level).fill(new Node());
        let p = this.head;
        for (let i = level - 1; i >= 0; i--) {
            while(p.refer[i] != null && p.refer[i].data < value) {
                p = p.refer[i];
            }
            update[i] = p;
        }
        for (let i = 0; i < level; i++) { 
            // 链表节点插入 newNode.next = p.next; p.next = newNode;
            newNode.refer[i] = update[i].refer[i];
            update[i].refer[i] = newNode;
        }
        if (this.levelCount < level) {
            this.levelCount = level;
        }
    }
    // 跳表中移除元素
    erase (value) {
        let p = this.head;
        let update = new Array(this.levelCount).fill(new Node());
        for (let i = this.levelCount - 1; i >= 0; i--) {
            while(p.refer[i] && p.refer[i].data < value) {
                p = p.refer[i];
            }
            update[i] = p;
        }
        if (p.refer[0] && p.refer[0].data == value) {
            for (let i = this.levelCount - 1; i >= 0; i--) {
                if (update[i] && update[i].refer[i].data === value) {
                    // 链表节点删除 p.next = p.next.next;
                    update[i].refer[i] = update[i].refer[i].refer[i];
                }
            }
            return true;
        } 
        return false;
    }
    // 跳表中查找元素
    search (value) {
        if (!value) return null;
        let p = this.head;
        for (let i = this.levelCount - 1; i >= 0; i--) {
            while(p.refer[i] && p.refer[i].data < value) {
                p = p.refer[i];
            }
        }
        if (p.refer[0] && p.refer[0].data === value) return true;
        return false;
    }
    // 遍历最下层链表节点
    display () {
        let p = this.head;
        while (p.refer[0]) {
            console.log(p.refer[0].data);
            p = p.refer[0];
        }
    }
}

// test cases
const skiplist = new SkipList();

for (let i = 0; i < 10; i++) {
    skiplist.add(i + 1);
}
console.log(skiplist.search(2));
console.log(skiplist.erase(3));
