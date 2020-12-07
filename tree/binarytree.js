/**
 * 二叉搜索树实现
 * 添加重复值的处理：放到节点右边
 * api: insert, delete, find, findMin, findMax
 */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class SearchTree {
    constructor() {
        this.root = null;
    }
    // 插入节点
    insert(value) {
        let node = new Node(value);
        if (!root) {
            root = node;
            return;
        }

        let p = this.root;
        while (p) {
            if (value >= p.value) {
                if (!p.right) {
                    p.right = node;
                    return;
                }
                p = p.right;
            } else { // value < p.value
                if (!p.left) {
                    p.left = node;
                    return;
                }
                p = p.left;
            }
        }
    }
    // 删除指定数据的节点
    delete(value) {
        let p = this.root;
        let pp = null;
        while (p != null && p.data != data) {
            pp = p;
            if (value < p.data) p = p.left;
            else p = p.right;
        }
        if (!p) return ; // 没有找到

        // 要删除的节点包含两个节点，查找右子树的最小节点
        if (p.left != null && p.right != null) {
            let minP = p.right;
            let minPP = p;
            while (minP.left != null) {
                minPP = minP;
                minP = minP.left;
            }
            // 将minP的数据替换到p中
            p.data = minP.data;
            p = minP;
            pp = minPP;
        }
        // 要删除的节点是叶子节点或者包含1个子节点
        let child; 
        if (p.left) child = p.left;
        else if (p.right) child = p.right;
        else child = null;

        if (!pp) this.root = null;
        else if (pp.left == p) pp.left = child;
        else pp.right = child;
    }
    // 查找指定数据的节点
    find(value) {
        let p = this.root;
        while (p) {
            if (value < p.value) p = p.left;
            else if (value > p.value) p = p.right;
            else return p;
        }
        return null;
    }
    // 找到数值最小的节点
    findMin() {
        if (this.root === null) return null;
        let p = this.root;
        while (p.left) {
            p = p.left;
        }
        return p;
    }
    // 找到数值最大的节点
    findMax() {
        if (this.root === null) return null;
        let p = this.root;
        while (p.right) {
            p = p.right;
        }
        return p;
    }
}