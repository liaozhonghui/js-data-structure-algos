# dfs代码模板

#### 递归写法
```js
function dfs(node, visited) {
    if (!node || visited.has(node)) return;

    visited.add(node);

    process(node);

    for (let next_node of node.children()) {
        if (!visited.has(node)) dfs(node, visited);
    }
}
let visited = new Set();
dfs(tree.root, visited);
```

#### 非递归写法
```js
function dfs(tree) {
    if(!tree.root) return [];
    let visited = new Set();
    let stack = [tree.root];
    while (stack.length) {
        node = stack.pop();
        visited.add(node);

        process(node);

        // 生成相关的节点
        nodes = generate_related_nodes(node);
        for (let i = nodes.length - 1; i >= 0; i--) {
            if (!visited.has(node)) stack.push(node);
        }
    }
}

```