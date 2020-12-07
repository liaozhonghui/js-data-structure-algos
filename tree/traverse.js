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

function preOrder(root) {
    if (!root) return;
    console.log(root.value);
    preOrder(root.left);
    preOrder(root.right);
}
function inOrder (root) {
    if (!root) return;
    inOrder(root.left);
    console.log(root.value);
    inOrder(root.right);
}
function postOrder (root) {
    if (!root) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.value);
}

