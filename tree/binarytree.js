/**
 * 树的遍历
 * 1. 递归实现 前，中，后序遍历
 * 2. 迭代实现 前，中，后序遍历
 */
class Node {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }

    preOrder () {
        let p = this.root;
        let nodes = [];
        let helper = (p) => {
            if (!p) return;
            nodes.push(p.value);
            helper(p.left);
            helper(p.right);
        }
        helper(p);
        return nodes;
    }
    inOrder() {
        let p = this.root;
        let nodes = [];
        let helper = (p) => {
            if (!p) return;
            helper(p.left);
            nodes.push(p.value);
            helper(p.right);
        }
        helper(p);
        return nodes;
    }
    postOrder () {
        let p = this.root;
        let nodes = [];
        let helper = (p) => {
            if (!p) return;
            helper(p.left);
            helper(p.right);
            nodes.push(p.value);
        }
        helper(p);
        return nodes;
    }
}
