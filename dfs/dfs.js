/**
 * 深度优先搜索代码
 * 1. 多叉树
 * 2. 图， 在下面代码基础上，修改nodes数组获取方式
 *
 * dfs算法：
 * 1. 递归法
 * 2. 迭代法
 */

class Tree {
  constructor(root) {
    this.root = root;
  }
  dfs(target) {
    if (!this.root) return -1;

    let visited = new Set();
    let helper = (p) => {
      if (visited.has(p)) return;
      visited.add(p);
      if (p.value === target) return p;
      // 生成下层节点
      let nodes = [];
      if (p.right) nodes.push(p.right);
      if (p.left) nodes.push(p.left);
      for (let node of nodes) {
        if (!visited.has(node)) helper(node);
      }
    };
    let res = helper(this.root);
    return res != null ? res : -1;
  }

  // 迭代法实现dfs 借用stack实现
  stackDfs(target) {
    if (!this.root) return -1;

    let visited = new Set();
    let stack = [this.root];
    while (stack.length) {
      let p = stack.pop();
      if (visited.has(p)) continue;
      if (p.value === target) return node;

      let nodes = [];
      if (p.right) nodes.push(p.right);
      if (p.left) nodes.push(p.left);

      for (let node of nodes) {
        if (!visited.has(node)) stack.push(node);
      }
    }
    return -1;
  }
}
