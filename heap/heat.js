/**
 * 堆的实现
 * api: 
 * 1. heapify 建堆
 */

class HeapNode {
    constructor(num, item) {
        this.sortNum = num;
        this.content = item;
    }
}
class Heap {
    constructor(arr = []) {
        this.PRIVATE = {
            store: [].concat(arr),
            swap(arr, i, j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            },
            heapify(point = 1) {
                let { swap, store } = this;
                while (true) {
                    let lPoint = point * 2;
                    let rPoint = point * 2 + 1;
                    if (store[lPoint] && store[point].sortNum < store[lPoint].sortNum) {
                        swap(store, point, lPoint);
                        point = lPoint;
                        continue;
                    }
                    if (store[rPoint] && store[point].sortNum < store[rPoint].sortNum) {
                        swap(store, point, rPoint);
                        point = rPoint;
                        continue;
                    }
                    break;
                }
            }
        }

        // 建堆
        for (let i = (this.PRIVATE.store.length / 2 | 0); i > 1; i--) {
            this.PRIVATE.heapify(i);
        }
    }
    insert(node) {
        let store = this.PRIVATE.store;
        let HeapUtil = this.PRIVATE;
        store.push(node);

        let point = store.length - 1;
        let sub = point/2 | 0;
        while (sub > 0 && store[point].sortNum > store[sub].sortNum) {
            HeapUtil.swap(store, point, sub);
            point = sub;
            sub = sub / 2 | 0;
        }
    }
    getMax() {
        let store = this.PRIVATE.store;
        let point = store.length - 1;
        if (point === 0) return null;

        let HeapUtil = this.PRIVATE;
        HeapUtil.swap(store, point, 1);
        let max = store.pop();
        HeapUtil.heapify();
        return max;
    }
    // TODO: delete 删除堆中的节点
}