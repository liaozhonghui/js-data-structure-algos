### 数组

#### 数组的创建方式

1. 字面量
```js
var a = [1, 2, 3];
```
2. Array构造函数
```js
var a = new Array(1, 2, 3); // [1, 2, 3]
var a = new Array(10); // length = 10;
```

#### 判断数组
```js
Array.isArray()
```

#### 遍历数组
```js
for (let i of arr) {}
for (let i = 0; i < arr.length; i++) {}
```
使用Applicative编程函数， forEach, map, reduce, filter, some

#### 深复制和浅复制
```js
var a = [1, 2, 3];
var b = a; // 浅拷贝
function copy(arr1, arr2) { for (let i = 0; i < arr2.length; i++) {arr1[i] = arr2[i];}}
var c = new Array(a.length);
copy(c, a) // c完成对a的深拷贝
```

#### 数组的存取函数
- indexOf 如果在数组中返回对应下标，否则返回-1
- join 将数组连接为字符串，自定义分隔符
- toString 将数组连接为字符串， 分割符为逗号
- concat 合并多个数组生成新数组
- slice 截取数组来形成新数组, 左闭右开
- splice 原地操作数组 
- push 末尾添加
- pop 末尾移除
- shift 头部移除
- unshift 头部添加
- reverse 可以对数组进行翻转，影响数组本身

#### 数组的sort方法
Array.prototype.sort(compareFun);
compareFun(a, b) a是数组第二个元素，b是数组第一个元素，函数返回值为正，则a在b前面, 返回值为负，则b在a前面， 返回值为0，则顺序不变
```js 
var a = [1, 2, 3, 2.5];
a.sort(function (a, b) {
    return 1;
}) // [1, 2, 3, 2.5]
a.sort(function (a, b) {
    return -1;
}) // [2.5, 3, 2, 1]
a.sort(function(a, b) {
    return a-b;
}) // [1, 2, 2.5, 3] 正序排列
a.sort(function(a, b) {
    return b-a;
}) // [3, 2.5, 2, 1] 逆序排列
```

#### 二维数组
1. 使用数组嵌套数组创建二维数组
```js
// 创建一个n*m的数组
var a = new Array(n);
for (let i = 0; i < n; i++) a[i] = new Array(m);
```
2. 二维数组遍历a[row][col]

#### 对象数组
```js
function point(x, y) {
    this.x = x;
    this.y = y;
}
let collection = [];
collection.push(new Point(1, 1));
collection.push(new Point(2, 2));
collection.push(new Point(3, 3));
```