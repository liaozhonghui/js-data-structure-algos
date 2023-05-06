function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

var copyRandomList = function (head) {
  if (!head) return head;
  let node = head;
  while (node) {
    let v = new Node(node.val);
    v.next = node.next;
    node.next = v;
    node = node.next.next;
  }
  node = head;

  while (node) {
    node.next.random = node.random ? node.random.next : null;
    node = node.next.next;
  }
  node = head;
  while (node) {
    let v = node.next.next;
    node.next.next = v ? v.next : null;
    node = v;
  }
  return head.next;
};

/**
 * test case
 */

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
node2.next = null;
node1.random = node2;
node2.random = node1;

console.log(copyRandomList(node1));
